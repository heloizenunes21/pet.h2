


// async --> assincrono
async function imagemApi(){
// espera chegar a resposta --> await
let respostaApi = await fetch('https://dog.ceo/api/breeds/image/random');
let dadosJson = await respostaApi.json(); 
document.querySelector(".img-dog").src =dadosJson.message;
console.log(dadosJson )
}
imagemApi()

function whatsapp(){

   const texto = "olá, vim pelo site do PetLove e gostaria de agendar um horário para o meu pet "
   const textoFormatado = encodeURIComponent(texto)
  const url =  "https://wa.me/5544997074627?text=I" + textoFormatado;
  open(url, 'blank');
  console.log(url);
}