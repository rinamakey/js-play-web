/* 1 
let text="Жизнь прекрасна....";
let i=0;
let speed=70;

function type(){
    if(i<text.length){
        document.querySelector("#par").textContent+=text.charAt(i);
        i++;
    setTimeout(type,speed);
    }  
}
type();
*/
const input=document.querySelector('#quess');
const button=document.querySelector('#btn');
const answer=Math.floor(Math.random()*50+1);

input.addEventListener("keypress", function(e){
    if(e.keyCode===13){
        play();
    }
})
button.addEventListener("click",play);

function play(){
    const userNumber=document.querySelector("#quess").value ;
  
if(userNumber<1 || userNumber>50){
    Swal.fire({
        icon: 'error',
        title: 'ОЙ...',
        text: 'Введите число от 1 до 50!',
      })
    }
      else if(isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'ОЙ...',
            text: 'Нужно ввести число!',
          })
      }
      else{
        if(userNumber<answer){
            Swal.fire('Попробуй число повыше!',
                        'Компьютер пока побеждает')
        }
        else if(userNumber<answer){
            Swal.fire('Попробуй число пониже!',
            'Компьютер пока побеждает')
        }
        else{
            Swal.fire({
                title: 'Победа!',
                imageUrl: 'https://media.istockphoto.com/photos/lots-of-multicoloured-cubes-moving-in-space-to-come-together-to-form-picture-id1312818032?b=1&k=20&m=1312818032&s=170667a&w=0&h=1ATbE11tJ8wchBqnCrZVrd0bxnERiT1DtMVS2VufR1I=',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Custom image',
              })
        }
      }
}
