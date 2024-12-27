ls
cd exercicio1
echo "Inicio da instalação"
sudo apt-get install mailutils
echo "Fim da instalação"
echo "Enviando e-mail ao destinatário" | mail -s "subject: Venda de Bolachas" epfaffenbach@hotmail.com