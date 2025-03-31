
#NLTK libraries
import nltk
import re
import string
from nltk.corpus import stopwords
from wordcloud import WordCloud,STOPWORDS
from nltk.stem.porter import PorterStemmer

from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.preprocessing.text import one_hot



def Stemming(text):
    stop_words = set(stopwords.words("english"))
    #Performing stemming on the review dataframe
    ps = PorterStemmer()

    #splitting and adding the stemmed words except stopwords


    news = re.sub('[^a-zA-Z]', ' ',str(text))
    news= news.lower()
    news = news.split()
    news = [ps.stem(word) for word in news if not word in stop_words]
    news = ' '.join(news)

    return news



def one_hot_encode_embedding(text):
    #Setting up vocabulary size
    voc_size=5000

    #One hot encoding 
    onehot_encode=[one_hot(text,voc_size)] 
    #Setting sentence length
    sent_length=20

    #Padding the sentences
    embedded_docs=pad_sequences(onehot_encode,padding='pre',maxlen=sent_length)
    return embedded_docs



def prediction(model,embedded_docs):
    Prediction=model.predict(embedded_docs)
    if(Prediction<0.5):
        return "False"
    else:
        return "True"