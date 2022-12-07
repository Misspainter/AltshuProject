//    всплывающее окно 
   let modalWin = document.querySelector ('.subscribe-button');
    let winUp = document.querySelector('.windows_up');
    let darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
   
    modalWin.addEventListener ('click', () => {
        console.log('clicked!!!!');
        winUp.style.display = 'block';
    });

    modalWin.addEventListener ('click', () =>  {
     document.body.appendChild(darkLayer);
    });


   darkLayer.addEventListener ('click', () => {
    darkLayer.parentNode.removeChild(darkLayer);
    winUp.style.display = 'none';
    return false;
   });

   let closeWin = document.querySelector ('.button_up');
   let container = document.querySelector ('.container_text');

   closeWin.addEventListener ('click', () => {
    if (!container[i].value) {
        alert('Данные отправлены успешно!'); 
        darkLayer.parentNode.removeChild(darkLayer);
        winUp.style.display = 'none';     
    } else {
        console.log('ERORR!')
    }
   });

//    Блок с отзывами

   let obj1 = {
    content: "Работать с Валентиной было интересно. Она высокоорганизованный человек, который может создавать простые веб-сайты.",
    name: "Anastasiya Smirnova",
    prof: "Middle+ FullStack Developer in GEROPHARM"
   };

   let reviewsBoss = document.querySelector ('.about-stars');
   let reviews = reviewsBoss.querySelector ('.about-reviews');
   reviews.textContent = obj1.content;
   let reviewsName = reviewsBoss.querySelector ('.about-reviews-people');
   reviewsName.textContent = obj1.name;
   let reviewsProf = reviewsBoss.querySelector ('.about-reviews-prof');
   reviewsProf.textContent = obj1.prof;

//    блок с новостями

let newsArray = [
    {
        data:"21 OCT, 2022",
        title: "У робота есть «библиотека поведения»",
        content: "Boston Dynamics рассказала, как научила роботов Atlas заниматься паркуром. Машина на каждом этапе сама решает, что ей делать в этой ситуации."
    },
    {
        data:"03 Dec, 2022",
        title: "Производство электромобилей под маркой Lada.",
        content: "Через 7 лет в России появятся свои электромобили. Их будут производить под маркой Lada."
    },
    {
        data:"20 Dec, 2022",
        title: "В GitHub появилась встроенная поддержка файлов CITATION.cff.",
        content: "В GitHub завезли расширенную поддержку цитирования, чтобы было проще ссылаться на репозитории исследователей."
    }
  ];

  let newsBlock = document.querySelector ('.blog-news_1');
  let newsOneData = newsBlock.querySelector ('.blog-data');
  newsOneData.textContent = newsArray[0].data;
  let newsOneTitle = newsBlock.querySelector ('h5');
  newsOneTitle.textContent = newsArray[0].title;
  let newsOne = newsBlock.querySelector ('.blog-news');
  newsOne.textContent = newsArray[0].content;

  let newsBlockTwo = document.querySelector ('.blog-news_2');
  let newsTwoData = newsBlockTwo.querySelector ('.blog-data');
  newsTwoData.textContent = newsArray[1].data;
  let newsTwoTitle = newsBlockTwo.querySelector ('h5');
  newsTwoTitle.textContent = newsArray[1].title;
  let newsTwo = newsBlockTwo.querySelector ('.blog-news');
  newsTwo.textContent = newsArray[1].content;

  let newsBlockThree = document.querySelector ('.blog-news_3');
  let newsThreeData = newsBlockThree.querySelector ('.blog-data');
  newsThreeData.textContent = newsArray[2].data;
  let newsThreeTitle = newsBlockThree.querySelector ('h5');
  newsThreeTitle.textContent = newsArray[2].title;
  let newsThree = newsBlockThree.querySelector ('.blog-news');
  newsThree.textContent = newsArray[2].content;







