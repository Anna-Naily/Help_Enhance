<template>
  <div>
    <input type="checkbox" id="modal" />
    <label for="modal">
      <p class="blurp" aria-hidden="true">СПРАВКА</p>
    </label>
    <label for="modal" class="modal-bg"></label>
    <div class="modal-content">
      <label for="modal" class="close">
        <i class="fa fa-times" aria-hidden="true"></i>
      </label>
      <div class="img-logo">
        <img src="../assets/img/HelpLogo.png" alt />
      </div>
      <article class="content">
        <p class="content__text">Приветствую!</p>

        <h1
          class="content__text"
        >Вы находитесь на странице калькулятора-помогатора Help Enhance. Это потрясающе точный симулятор системы заточки из известной многопользовательской игры Black Desert Online.</h1>
        <h2
          class="content__text"
        >Попробуйте спрогнозировать результат заточки, автоматически подсчитывая прибыль и убытки, изменяя количество и стоимость ресурсов. В процессе усиления приложение само подводит статистику и отображает результаты выпадения рандомных чисел на графике.</h2>
        <h2
          class="content__text"
        >Все данные по шансам усиления, используемые в Help Enhance, достоверны и взяты из игры. Если вы еще не знакомы с тем, как работает система усиления, то вот вам небольшой экскурс:</h2>
        <h3
          class="content__text"
        >В приложении реализованы симуляции заточки золотой бижутерии, бижутерии Манос, босс комплекта брони, оружия Черной звезды и брони Мертвого бога. Для того, чтобы усилить ту или иную вещь, вам понадобятся определенные ресурсы. Все необходимые ресурсы показаны в инвентаре, их количество можно изменять. Результат усиления вещи зависит от шанса успешного усиления, варьируемого от количества фейлов, которое так же можно изменить. С каждым неудачным усилением, количество фейлов увеличивается на определенное фиксированное число, что конечно же повышает шанс усиления. В случае успешного усиления система автоматически переведет вас на следующий уровень усиления, в случае неудачи откинет на предыдущий или исходный уровень (в зависимости от усиляемой вещи). Однако, если вы используете усиление с кронами, то ваша вещь либо не исчезнет (если усиливается бижутерия), либо останется текущего уровня усиления (если усиливается броня). Бижутерия Манос не подразумевает усиление с кронами. В приложении для удобства реализована функция "потоковое усиление", позволяющая повторять попытки улучшения до исчерпания необходимых ресурсов, не переходя на другой уровень усиления.</h3>
        <p
          class="content__text"
        >Любая попытка усилить вещь будет фиксироваться в статистике и на графике. Статистика по итогу покажет ваши результативные шансы и затраченные ресурсы. График иллюстрирует по шкале У (от 0 до 100) процент, который вам выпал при усилении, а по шкале Х номер вашей попытки. В текстовой форме результат и историю усиления вы можете посмотреть в окне истории.</p>
        <p
          class="content__text"
        >Заточка сопровождается параллельными расчетами, цену ресурсов, фейлов, а так же процент налога за продажу вы вольны выбирать самостоятельно.</p>
        <p class="content__text">Приятного пользования!</p>
      </article>
      <footer>
        <label for="modal" class="button danger">ЯСНО</label>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalInfoComp',
};
</script>

<style lang="scss" scoped>
$base-duration: 500ms;

// Colors
$color-1: #2c3e50;
$color-2: #3498db;
$color-3: #2ecc71;
$color-4: #e74c3c;

// Breakpoints
$sm: new-breakpoint(min-width 320px);
$med: new-breakpoint(min-width 768px);
$lg: new-breakpoint(min-width 1024px);

body {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
  font-size: 16px;
  font-smooth: auto;
  font-weight: 300;
  line-height: 1.5;
  color: #444;
  cursor: none;
  background-position: center center;
  background-size: cover;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(white, 0.7);
    z-index: -1;
  }
}

p {
  font-weight: 400;
}

a {
  text-decoration: none;
}

label {
  cursor: pointer;
}

.modal-btn {
  position: relative;
  display: table-cell;
  width: 100px;
  height: 100px;
  background-color: $color-1;
  box-shadow: 0 0 40px rgba(black, 0.3);
  border-radius: 50%;
  font-size: 36px;
  color: white;
  text-align: center;
  line-height: 2.75;
  transition: box-shadow 250ms ease;
  &:hover {
    box-shadow: 0 0 5px rgba(black, 0.3);
  }
}

.modal-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 10;
  visibility: hidden;
  transition: background-color $base-duration/2 linear;
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  margin-top: -22%;
  margin-left: -25%;
  padding: 30px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 50px rgba(black, 0.5);
  transform: scale(0);
  transition: transform $base-duration/2 ease;
  visibility: hidden;
  z-index: 20;
  position: fixed;
  cursor: auto;
  .close {
    position: relative;
    float: right;
    font-size: 18px;
    transition: transform $base-duration ease;
    z-index: 11;
    &:hover {
      color: $color-2;
      transform: rotate(540deg);
    }
  }

  .img-logo {
    position: relative;
    display: block;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    img {
      width: 80px;
    }
  }

  .content {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    color: #222222;
    text-transform: none;
    overflow-y: scroll;
    height: 580px;
    .content__text {
      margin-top: 10px;
      text-indent: 30px;
      font-size: 16px;
      line-height: 1.75;
    }
    h1 {
      color: #a06b2a;
      font-weight: bold;
    }
    .content__text:first-child {
      text-align: center;
      text-indent: 0px;
    }
  }

  footer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin: 0;
    padding: 10px 0 0;

    .button {
      position: relative;
      padding: 10px 30px;
      border-radius: 3px;
      font-size: 14px;
      font-weight: 400;
      color: white;
      text-transform: uppercase;
      overflow: hidden;

      &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: rgba(white, 0.2);
        transition: width 250ms ease;
        z-index: 0;
      }

      &:hover {
        &:before {
          width: 100%;
        }
      }

      &.success {
        margin-right: 5px;
        background-color: $color-3;
      }

      &.danger {
        background-color: $color-4;
      }
    }
  }
}

#modal {
  display: none;

  &:checked ~ .modal-bg {
    visibility: visible;
    background-color: black;
    opacity: 0.7;
    transition: background-color $base-duration/2 linear;
  }

  &:checked ~ .modal-content {
    visibility: visible;
    transform: scale(1);
    transition: transform $base-duration/2 ease;
    z-index: 111;
  }
}
</style>
