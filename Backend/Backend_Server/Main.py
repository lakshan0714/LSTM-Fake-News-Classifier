from Prediction import one_hot_encode_embedding,Stemming,prediction

from tensorflow.keras.models import load_model
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from tensorflow.keras.models import load_model
import uvicorn

# Define request body schema
class TextInput(BaseModel):
    text: str

# Initialize FastAPI app
app = FastAPI()


#load model
model_1 = load_model("../LSTM model Training/model.h5")


def final_output(text,model=model_1):
    text1=Stemming(text)
    embedding=one_hot_encode_embedding(text1)
    output=prediction(model,embedding)
    return output




# API endpoint
@app.post("/predict")
def predict(input_data: TextInput):
    try:
        result = final_output(input_data.text)
        return {"prediction": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

# Run the app
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)