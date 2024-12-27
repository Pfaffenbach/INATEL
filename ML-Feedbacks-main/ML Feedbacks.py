import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score
import joblib

# Carregando dados da planilha
dados = pd.read_excel("C:/Users/epfaf/OneDrive/Área de Trabalho/Projeto Feedbacks/feedbacks_livros.xlsx")

# Dividir os dados em recursos (X) e rótulos (y)
X = dados["Feedback"]
y = dados["Valor"]

# Convertendo os rótulos em números
y = y.map({"Ruim": 0, "Neutro": 1, "Bom": 2})

# Dividindo os dados em conjuntos de treinamento e teste
X_treino, X_teste, y_treino, y_teste = train_test_split(X, y, test_size=0.2, random_state=42)

# Criando o vetorizador que vai converter o texto para dados numéricos
vetorizador = CountVectorizer()

# Transformando os dados de texto em vetores numéricos
X_treino_vetorizado = vetorizador.fit_transform(X_treino)
X_teste_vetorizado = vetorizador.transform(X_teste)

# Criando e treinando o Machine Learning (classificador usado: Naive Bayes)
modelo = MultinomialNB()
modelo.fit(X_treino_vetorizado, y_treino)

# Avaliando a precisão do modelo
precisao = accuracy_score(y_teste, modelo.predict(X_teste_vetorizado))
print("Precisão do modelo:", precisao)

# Salvando o modelo treinado para uso futuro
joblib.dump(modelo, "modelo_feedback_livros.pkl")
joblib.dump(vetorizador, "vetorizador_feedback_livros.pkl")

# Carregando o modelo e o vetorizador treinados para ser usado para prever os valores dos feedbacks dos livros
modelo_carregado = joblib.load("modelo_feedback_livros.pkl")
vetorizador_carregado = joblib.load("vetorizador_feedback_livros.pkl")

# Entrando com um feedback e vendo qual seu valor
feedback_livro = ["Adorei o livro, super indico!!!"]
feedback_vetorizado = vetorizador_carregado.transform(feedback_livro)
sentimento_previsto = modelo_carregado.predict(feedback_vetorizado)

# Mapeando o valor previsto de volta para o rótulo
sentimento_previsto_rotulo = {0: "ruim", 1: "neutro", 2: "bom"}
sentimento_final = sentimento_previsto_rotulo[sentimento_previsto[0]]

print("Feedback do livro obtido:", sentimento_final)
