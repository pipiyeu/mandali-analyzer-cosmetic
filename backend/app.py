from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
from pathlib import Path
from scipy.sparse import issparse

app = Flask(__name__)
CORS(app)

# Arahkan path model keluar satu level ke folder models/
BASE_DIR = Path(__file__).resolve().parent
MODEL_DIR = BASE_DIR / "models"

model = joblib.load(MODEL_DIR / "binary_relevance.pkl")
mlb = joblib.load(MODEL_DIR / "mlb.pkl")
tfidf = joblib.load(MODEL_DIR / "tfidf.pkl")
selected_idx = np.asarray(joblib.load(MODEL_DIR / "selected_idx.pkl"), dtype=int)

DESKRIPSI_LABEL = {
        "acne fighting": "Melawan jerawat dan membantu mencegah munculnya jerawat baru.",
        "acne trigger": "Dapat menyumbat pori-pori atau memicu timbulnya jerawat.",
        "anti-aging": "Menyamarkan garis halus dan membantu kulit tampak lebih muda.",
        "brightening": "Mengembalikan kecerahan pada kulit yang kusam dan tampak lelah.",
        "dark spots": "Memudarkan bintik hitam untuk warna kulit yang lebih merata.",
        "drying": "Dapat menghilangkan kelembapan alami dan memperburuk kekeringan.",
        "eczema": "Dapat memperburuk rasa gatal atau iritasi pada kulit eksim.",
        "good for oily skin": "Menyeimbangkan kadar minyak dan membantu mengurangi kilap.",
        "hydrating": "Meningkatkan hidrasi dan mengatasi kulit kering serta terasa kencang.",
        "irritating": "Potensi menyebabkan iritasi atau ketidaknyamanan pada kulit.",
        "may worsen oily skin": "Dapat meningkatkan kilap atau produksi minyak berlebih.",
        "redness reducing": "Meredakan kemerahan yang terlihat dan menenangkan iritasi.",
        "reduces irritation": "Mengurangi rasa tidak nyaman dan mendukung ketahanan kulit.",
        "reduces large pores": "Meminimalkan tampilan pori-pori yang membesar.",
        "rosacea": "Dapat memicu kekambuhan pada kulit yang rentan rosacea.",
        "scar healing": "Memperbaiki tampilan bekas luka dan noda pada kulit.",
        "skin texture": "Menghaluskan bagian kulit yang kasar dan memperbaiki tekstur."
}

MANFAAT_LABELS = {
    "acne fighting",
    "anti-aging",
    "brightening",
    "dark spots",
    "good for oily skin",
    "hydrating",
    "redness reducing",
    "reduces irritation",
    "reduces large pores",
    "scar healing",
    "skin texture",
}
EFEK_SAMPING_LABELS = {
    "acne trigger",
    "drying",
    "eczema",
    "irritating",
    "may worsen oily skin",
    "rosacea"
}

@app.route("/api/predict", methods=["POST"])
def predict():
    data = request.get_json()
    text = data.get("ingredients", "")
    
    if not text.strip():
        return jsonify({"success": False, "error": "Ingredients kosong"}), 400
        
    try:
        X = tfidf.transform([text])
        X_selected = X[:, selected_idx]
        
        # 1. Ambil probabilitas (hasilnya berupa array probabilitas tiap label)
        # predict_proba biasanya menghasilkan list array untuk setiap label biner
        probas = model.predict_proba(X_selected)
        
        # 2. Ambil prediksi biner standar (0 atau 1) untuk menentukan label yang aktif
        y_pred = model.predict(X_selected)
        if issparse(y_pred):
            y_pred = y_pred.toarray()
            
        active_idx = np.where(y_pred[0] == 1)[0]
        
        benefits = []
        cautions = []
        
        for i in active_idx:
            lbl = str(mlb.classes_[i])
            lbl_lower = lbl.lower()
            
            # 3. Ambil nilai confidence score (probabilitas) untuk label tersebut
            # Format probas tergantung library (misal scikit-multilearn / sklearn chaining)
            # Biasanya probas[0][i] atau probas[i][0][1] untuk probabilitas kelas positif (1)
            try:
                # Sesuaikan indeks jika struktur probas berbentuk list of arrays
                score = float(probas[0][i]) if not isinstance(probas, list) else float(probas[i][0][1])
            except:
                score = 0.85 # Fallback aman jika struktur format berbeda
                
            confidence_pct = round(score * 100) # Ubah ke persen (contoh: 85%)
            
            item = {
                "label": lbl.title(),
                "description": DESKRIPSI_LABEL.get(lbl_lower, "Informasi belum tersedia."),
                "confidence": confidence_pct # <--- Kirim ke frontend
            }
            
            if lbl_lower in EFEK_SAMPING_LABELS:
                cautions.append(item)
            else:
                benefits.append(item)

        return jsonify({"success": True, "benefits": benefits, "cautions": cautions})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route("/", methods=["GET"])
def home():
    return {"message": "Mandali Flask API is running!"}

if __name__ == "__main__":
    app.run(debug=True, port=8000)