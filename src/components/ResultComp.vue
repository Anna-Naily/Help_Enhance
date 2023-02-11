<template>
  <div class="result-wrapper" id="result">
    <div class="top-result container">
      <p class="main-heading">РАСЧЕТ</p>
      <span
        class="discription"
      >СПРАВКА: все расчеты в данном разделе выполняются и указываются в миллионах (кк). Потрачено - ваши затраты на заточку. Получено - общий доход. Прибыль - чистая прибыль с вычетом затрат.</span>
    </div>
    <div class="bottom-block container">
      <div class="bottom-block__item">
        <div class="box-left">
          <div class="box-inner-left" v-if="this.getTypeOfEnhance==1">
            <div class="bottom-block__el">
              <p class="bottom-block__el-heading">Cтоимость вещей:</p>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_zero.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultJewelry.priceItem0"
                  @input="setCostItem($event, 0)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_one.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultJewelry.priceItem1"
                  @input="setCostItem($event, 1)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_two.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultJewelry.priceItem2"
                  @input="setCostItem($event, 2)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_three.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultJewelry.priceItem3"
                  @input="setCostItem($event, 3)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_four.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultJewelry.priceItem4"
                  @input="setCostItem($event, 4)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_five.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultJewelry.priceItem5"
                  @input="setCostItem($event, 5)"
                />
              </span>
            </div>
            <div class="bottom-block__el">
              <p class="bottom-block__el-heading">Стоимость материалов:</p>

              <span class="bottom-block__el-span last-child-span">
                <img src="../assets/img/cron.png" alt class="bottom-block__img material-img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getPriceCron"
                  @input="setCostCron($event)"
                />
              </span>
            </div>
          </div>
          <div class="box-inner-left" v-if="getTypeOfEnhance==2">
            <div class="bottom-block__el">
              <p class="bottom-block__el-heading">Cтоимость вещей:</p>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_15.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmor.priceItem0"
                  @input="setCostItem($event, 0)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_16.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmor.priceItem1"
                  @input="setCostItem($event, 1)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_17.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmor.priceItem2"
                  @input="setCostItem($event, 2)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_18.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmor.priceItem3"
                  @input="setCostItem($event, 3)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_19.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmor.priceItem4"
                  @input="setCostItem($event, 4)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_20.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmor.priceItem5"
                  @input="setCostItem($event, 5)"
                />
              </span>
            </div>
            <div class="bottom-block__el">
              <p class="bottom-block__el-heading">Стоимость материалов:</p>
              <span class="bottom-block__el-span last-child-span">
                <img src="../assets/img/partmemory.png" alt class="bottom-block__img material-img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getPriceCookie"
                  @input="setCostCookie($event)"
                />
              </span>
              <span class="bottom-block__el-span last-child-span">
                <img
                  src="../assets/img/none_fone_magicstone.png"
                  alt
                  class="bottom-block__img material-img"
                />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmor.priceMagicStone"
                  @input="setCostMagicStone($event)"
                />
              </span>
              <span class="bottom-block__el-span last-child-span">
                <img src="../assets/img/cron.png" alt class="bottom-block__img material-img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getPriceCron"
                  @input="setCostCron($event)"
                />
              </span>
            </div>
          </div>
          <div class="box-inner-left" v-if="getTypeOfEnhance==3">
            <div class="bottom-block__el">
              <p class="bottom-block__el-heading">Cтоимость вещей:</p>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_blackstar15.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultBlackstar.priceItem0"
                  @input="setCostItem($event, 0)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_blackstar16.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultBlackstar.priceItem1"
                  @input="setCostItem($event, 1)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_blackstar17.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultBlackstar.priceItem2"
                  @input="setCostItem($event, 2)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_blackstar18.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultBlackstar.priceItem3"
                  @input="setCostItem($event, 3)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_blackstar19.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultBlackstar.priceItem4"
                  @input="setCostItem($event, 4)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_blackstar20.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultBlackstar.priceItem5"
                  @input="setCostItem($event, 5)"
                />
              </span>
            </div>
            <div class="bottom-block__el">
              <p class="bottom-block__el-heading">Стоимость материалов:</p>
              <span class="bottom-block__el-span last-child-span">
                <img src="../assets/img/partmemory.png" alt class="bottom-block__img material-img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getPriceCookie"
                  @input="setCostCookie($event)"
                />
              </span>
              <span class="bottom-block__el-span last-child-span">
                <img
                  src="../assets/img/none_fone_StoneIntegrity.png"
                  alt
                  class="bottom-block__img material-img"
                />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultBlackstar.priceMagicStone"
                  @input="setCostMagicStone($event)"
                />
              </span>
              <span class="bottom-block__el-span last-child-span">
                <img src="../assets/img/cron.png" alt class="bottom-block__img material-img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getPriceCron"
                  @input="setCostCron($event)"
                />
              </span>
            </div>
          </div>
          <div class="box-inner-left" v-if="getTypeOfEnhance==4">
            <div class="bottom-block__el">
              <p class="bottom-block__el-heading">Cтоимость вещей:</p>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_god.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmorGod.priceItem0"
                  @input="setCostItem($event, 0)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_god16.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmorGod.priceItem1"
                  @input="setCostItem($event, 1)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_god17.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmorGod.priceItem2"
                  @input="setCostItem($event, 2)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_god18.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmorGod.priceItem3"
                  @input="setCostItem($event, 3)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_god19.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmorGod.priceItem4"
                  @input="setCostItem($event, 4)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_god20.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmorGod.priceItem5"
                  @input="setCostItem($event, 5)"
                />
              </span>
            </div>
            <div class="bottom-block__el">
              <p class="bottom-block__el-heading">Стоимость материалов:</p>
              <span class="bottom-block__el-span last-child-span">
                <img src="../assets/img/partmemory.png" alt class="bottom-block__img material-img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getPriceCookie"
                  @input="setCostCookie($event)"
                />
              </span>
              <span class="bottom-block__el-span last-child-span">
                <img
                  src="../assets/img/none_fone_StoneChaos.png"
                  alt
                  class="bottom-block__img material-img"
                />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultArmorGod.priceMagicStone"
                  @input="setCostMagicStone($event)"
                />
              </span>
              <span class="bottom-block__el-span last-child-span">
                <img src="../assets/img/cron.png" alt class="bottom-block__img material-img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getPriceCron"
                  @input="setCostCron($event)"
                />
              </span>
            </div>
          </div>
          <div class="box-inner-left" v-if="getTypeOfEnhance==5">
            <div class="bottom-block__el">
              <p class="bottom-block__el-heading">Cтоимость вещей:</p>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_manos.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultManos.priceItem0"
                  @input="setCostItem($event, 0)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_manos16.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultManos.priceItem1"
                  @input="setCostItem($event, 1)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_manos17.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultManos.priceItem2"
                  @input="setCostItem($event, 2)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_manos18.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultManos.priceItem3"
                  @input="setCostItem($event, 3)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_manos19.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultManos.priceItem4"
                  @input="setCostItem($event, 4)"
                />
              </span>
              <span class="bottom-block__el-span">
                <img src="../assets/img/none_fone_manos20.png" alt class="bottom-block__img" />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultManos.priceItem5"
                  @input="setCostItem($event, 5)"
                />
              </span>
            </div>
            <div class="bottom-block__el">
              <p class="bottom-block__el-heading">Стоимость материалов:</p>
              <span class="bottom-block__el-span last-child-span">
                <img
                  src="../assets/img/none_fone_stoneManos.png"
                  alt
                  class="bottom-block__img material-img"
                />
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResultManos.priceMagicStone"
                  @input="setCostMagicStone($event)"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-block__item item-center">
        <div class="bottom-block_center">
          <p class="bottom-block__el-heading tax">Налог:</p>
          <div class="bottom-block_center">
            <div class="radio-box styled-input--diamond">
              <div class="styled-input-single bottom-block__checkbox-input">
                <input type="radio" name="fieldset-4" id="radio4-example-one" @click="setTax(0.65)" />
                <label for="radio4-example-one" class="text-radio">35%</label>
              </div>
              <div class="styled-input-single">
                <input
                  type="radio"
                  name="fieldset-4"
                  id="radio4-example-two"
                  checked="checked"
                  @click="setTax(0.85)"
                />
                <label for="radio4-example-two" class="text-radio">15%</label>
              </div>
              <div class="styled-input-single">
                <input
                  type="radio"
                  name="fieldset-4"
                  id="radio4-example-three"
                  @click="setTax(0.9)"
                />
                <label for="radio4-example-three" class="text-radio">10%</label>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-block_center center-rhomb">
          <div class="bottom-block__result">
            <p class="bottom-block__heading-result">Результат:</p>
            <span class="bottom-block__center-el">
              <p class="result-text">Потрачено:</p>
              <span class="result-span">{{getResult.cost.toFixed(2)}}</span>
            </span>
            <span class="bottom-block__center-el">
              <p class="result-text">Получено:</p>
              <span class="result-span">{{getResult.receipt.toFixed(2)}}</span>
            </span>
            <span class="bottom-block__center-el">
              <p class="result-text">Прибыль:</p>
              <span class="result-span">{{getResult.profit.toFixed(2)}}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bottom-block__item item-right">
        <div class="box-right">
          <div class="box-inner-right">
            <div class="bottom-block__el">
              <p class="bottom-block__el-heading">стоимость фейлов:</p>
              <span class="bottom-block__el-span failstack-span">
                <p class="bottom-block__fail-text" v-bind:class="{darkText:getUseManos}">На I</p>
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResult.priceFailstack1"
                  @input="setCostFailstack($event, 1)"
                  v-bind:class="{darkWindow:getUseManos}"
                />
              </span>
              <span class="bottom-block__el-span failstack-span">
                <p class="bottom-block__fail-text" v-bind:class="{darkText:getUseManos}">На II</p>
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResult.priceFailstack2"
                  @input="setCostFailstack($event, 2)"
                  v-bind:class="{darkWindow:getUseManos}"
                />
              </span>
              <span class="bottom-block__el-span failstack-span">
                <p class="bottom-block__fail-text" v-bind:class="{darkText:getUseManos}">На III</p>
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResult.priceFailstack3"
                  @input="setCostFailstack($event, 3)"
                  v-bind:class="{darkWindow:getUseManos}"
                />
              </span>
              <span class="bottom-block__el-span failstack-span">
                <p class="bottom-block__fail-text" v-bind:class="{darkText:getUseManos}">На IV</p>
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResult.priceFailstack4"
                  @input="setCostFailstack($event, 4)"
                  v-bind:class="{darkWindow:getUseManos}"
                />
              </span>
              <span class="bottom-block__el-span failstack-span">
                <p class="bottom-block__fail-text" v-bind:class="{darkText:getUseManos}">На V</p>
                <input
                  class="bottom-block__input"
                  type="text"
                  :value="getResult.priceFailstack5"
                  @input="setCostFailstack($event, 5)"
                  v-bind:class="{darkWindow:getUseManos}"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ResultComp',
  data() {
    return {};
  },

  methods: {
    ...mapActions('result', [
      'setInputCostJewelry',
      'setInputCostArmor',
      'setInputCostArmorGod',
      'setInputCostBlackstar',
      'setInputCostManos',
      'setCostFailstackJewelry',
      'setCostFailstackArmor',
      'setCostFailstackArmorGod',
      'setCostFailstackBlackstar',
      'setCostFailstackManos',
      'setTax',
      'setResultJewelry',
      'setResultArmor',
      'setResultArmorGod',
      'setResultBlackstar',
      'setResultManos',
      'setChanger',
      'setInputCostCookie',
      'setInputCostMagicStone',
      'setInputCostIntegrityStone',
      'setInputCostChaosStone',
      'setInputCostManosStone',
      'setInputCostCron',
    ]),
    setCostFailstack(e, level) {
      let valueObj = {};
      valueObj.level = level;
      valueObj.value = e.target.value;
      switch (this.getTypeOfEnhance) {
        case 1:
          this.setCostFailstackJewelry(valueObj);
          break;
        case 2:
          this.setCostFailstackArmor(valueObj);
          break;
        case 3:
          this.setCostFailstackBlackstar(valueObj);
          break;
        case 4:
          this.setCostFailstackArmorGod(valueObj);
          break;
        case 5:
          this.setCostFailstackManos(valueObj);
          break;
        default:
          break;
      }
      this.setChanger();
    },
    setCostItem(e, level) {
      let valueObj = {};
      valueObj.level = level;
      valueObj.value = e.target.value;
      switch (this.getTypeOfEnhance) {
        case 1:
          this.setInputCostJewelry(valueObj);
          break;
        case 2:
          this.setInputCostArmor(valueObj);
          break;
        case 3:
          this.setInputCostBlackstar(valueObj);
          break;
        case 4:
          this.setInputCostArmorGod(valueObj);
          break;
        case 5:
          this.setInputCostManos(valueObj);
          break;
        default:
          break;
      }
      this.setChanger();
    },

    //вспомогательный метод для расчетов. В случае отрицательного добавления - вернет 0
    equateValue(value) {
      if (value < 0) return 0;
      return value;
    },
    setResult(obj) {
      switch (this.getTypeOfEnhance) {
        case 1:
          this.setResultJewelry(obj);
          break;
        case 2:
          this.setResultArmor(obj);
          break;
        case 3:
          this.setResultBlackstar(obj);
          break;
        case 4:
          this.setResultArmorGod(obj);
          break;
        case 5:
          this.setResultManos(obj);
          break;
      }
    },
    calculateAllArmorTypes(enhanceObj, resultObj, statisticsObj) {
      let result = { cost: 0, receipt: 0, profit: 0 };
      let startCost = 0;
      let addedCost = 0;
      let failCost = 0;
      let receiptCost = 0;
      let materialCost = 0;

      startCost =
        enhanceObj.startCountZero * resultObj.priceItem0 +
        enhanceObj.startCountOne * resultObj.priceItem1 +
        enhanceObj.startCountTwo * resultObj.priceItem2 +
        enhanceObj.startCountThree * resultObj.priceItem3 +
        enhanceObj.startCountFour * resultObj.priceItem4 +
        enhanceObj.startCountMagicStone * resultObj.priceMagicStone;

      addedCost =
        this.equateValue(enhanceObj.addedCountZero) * resultObj.priceItem0 +
        this.equateValue(enhanceObj.addedCountOne) * resultObj.priceItem1 +
        this.equateValue(enhanceObj.addedCountTwo) * resultObj.priceItem2 +
        this.equateValue(enhanceObj.addedCountThree) * resultObj.priceItem3 +
        this.equateValue(enhanceObj.addedCountFour) * resultObj.priceItem4 +
        this.equateValue(enhanceObj.addedCountMagicStone) *
          resultObj.priceMagicStone;

      failCost =
        statisticsObj.countSuccessTo1 * resultObj.priceFailstack1 +
        statisticsObj.countSuccessTo2 * resultObj.priceFailstack2 +
        statisticsObj.countSuccessTo3 * resultObj.priceFailstack3 +
        statisticsObj.countSuccessTo4 * resultObj.priceFailstack4 +
        statisticsObj.countSuccessTo5 * resultObj.priceFailstack5;
      materialCost =
        this.getPriceCookie * statisticsObj.countLostCookie +
        this.getPriceCron * statisticsObj.countLostCron;
      result.cost = startCost + addedCost + failCost + materialCost;
      receiptCost =
        (enhanceObj.countZero * resultObj.priceItem0 +
          enhanceObj.countOne * resultObj.priceItem1 +
          enhanceObj.countTwo * resultObj.priceItem2 +
          enhanceObj.countThree * resultObj.priceItem3 +
          enhanceObj.countFour * resultObj.priceItem4 +
          enhanceObj.countFive * resultObj.priceItem5 +
          enhanceObj.countMagicStone * resultObj.priceMagicStone) *
        this.getTax;
      result.receipt = receiptCost;
      result.profit = result.receipt - result.cost;
      return result;
    },
    calculateJewelryType(enhanceObj, resultObj, statisticsObj) {
      let result = { cost: 0, receipt: 0, profit: 0 };
      let startCost = 0;
      let addedCost = 0;
      let failCost = 0;
      let receiptCost = 0;
      let cronCost =
        this.getPriceCron * this.getStatisticalDataJewelry.countLostCron;
      //затраты на стартовое количество бижутерии

      startCost =
        enhanceObj.startCountZero * resultObj.priceItem0 +
        enhanceObj.startCountOne * resultObj.priceItem1 +
        enhanceObj.startCountTwo * resultObj.priceItem2 +
        enhanceObj.startCountThree * resultObj.priceItem3 +
        enhanceObj.startCountFour * resultObj.priceItem4;
      //затраты на ДОБАВЛЕННУЮ вручную бижутерию
      addedCost =
        this.equateValue(enhanceObj.addedCountZero) * resultObj.priceItem0 +
        this.equateValue(enhanceObj.addedCountOne) * resultObj.priceItem1 +
        this.equateValue(enhanceObj.addedCountTwo) * resultObj.priceItem2 +
        this.equateValue(enhanceObj.addedCountThree) * resultObj.priceItem3 +
        this.equateValue(enhanceObj.addedCountFour) * resultObj.priceItem4;

      //затраты на фейлы бижутерии
      failCost =
        statisticsObj.countSuccessTo1 * resultObj.priceFailstack1 +
        statisticsObj.countSuccessTo2 * resultObj.priceFailstack2 +
        statisticsObj.countSuccessTo3 * resultObj.priceFailstack3 +
        statisticsObj.countSuccessTo4 * resultObj.priceFailstack4 +
        statisticsObj.countSuccessTo5 * resultObj.priceFailstack5;
      result.cost = startCost + addedCost + failCost + cronCost;
      receiptCost =
        (enhanceObj.countZero * resultObj.priceItem0 +
          enhanceObj.countOne * resultObj.priceItem1 +
          enhanceObj.countTwo * resultObj.priceItem2 +
          enhanceObj.countThree * resultObj.priceItem3 +
          enhanceObj.countFour * resultObj.priceItem4 +
          enhanceObj.countFive * resultObj.priceItem5) *
        this.getTax;
      result.receipt = receiptCost;
      result.profit = result.receipt - result.cost;
      return result;
    },
    calculateManosType(enhanceObj, resultObj) {
      let result = { cost: 0, receipt: 0, profit: 0 };
      let startCost = 0;
      let addedCost = 0;

      let receiptCost = 0;
      startCost =
        enhanceObj.startCountZero * resultObj.priceItem0 +
        enhanceObj.startCountOne * resultObj.priceItem1 +
        enhanceObj.startCountTwo * resultObj.priceItem2 +
        enhanceObj.startCountThree * resultObj.priceItem3 +
        enhanceObj.startCountFour * resultObj.priceItem4 +
        enhanceObj.startCountMagicStone * resultObj.priceMagicStone;

      addedCost =
        this.equateValue(enhanceObj.addedCountZero) * resultObj.priceItem0 +
        this.equateValue(enhanceObj.addedCountOne) * resultObj.priceItem1 +
        this.equateValue(enhanceObj.addedCountTwo) * resultObj.priceItem2 +
        this.equateValue(enhanceObj.addedCountThree) * resultObj.priceItem3 +
        this.equateValue(enhanceObj.addedCountFour) * resultObj.priceItem4 +
        this.equateValue(enhanceObj.addedCountMagicStone) *
          resultObj.priceMagicStone;

      result.cost = startCost + addedCost;
      receiptCost =
        enhanceObj.countZero * resultObj.priceItem0 +
        enhanceObj.countOne * resultObj.priceItem1 +
        enhanceObj.countTwo * resultObj.priceItem2 +
        enhanceObj.countThree * resultObj.priceItem3 +
        enhanceObj.countFour * resultObj.priceItem4 +
        enhanceObj.countFive * resultObj.priceItem5 +
        enhanceObj.countMagicStone * resultObj.priceMagicStone * this.getTax;

      result.receipt = receiptCost;
      result.profit = result.receipt - result.cost;
      return result;
    },
    calculateResult() {
      switch (this.getTypeOfEnhance) {
        case 1:
          if (this.getEnhanceJewelry.readyCalculate) {
            this.setResult(
              this.calculateJewelryType(
                this.getEnhanceJewelry,
                this.getResultJewelry,
                this.getStatisticalDataJewelry
              )
            );
          }
          break;

        case 2:
          if (this.getEnhanceArmor.readyCalculate) {
            this.setResult(
              this.calculateAllArmorTypes(
                this.getEnhanceArmor,
                this.getResultArmor,
                this.getStatisticalDataArmor
              )
            );
          }
          break;

        case 3:
          if (this.getEnhanceBlackstar.readyCalculate) {
            this.setResult(
              this.calculateAllArmorTypes(
                this.getEnhanceBlackstar,
                this.getResultBlackstar,
                this.getStatisticalDataBlackstar
              )
            );
          }
          break;

        case 4:
          if (this.getEnhanceArmorGod.readyCalculate) {
            this.setResult(
              this.calculateAllArmorTypes(
                this.getEnhanceArmorGod,
                this.getResultArmorGod,
                this.getStatisticalDataArmorGod
              )
            );
          }
          break;

        case 5:
          if (this.getEnhanceManos.readyCalculate) {
            this.setResult(
              this.calculateManosType(this.getEnhanceManos, this.getResultManos)
            );
          }
          break;

        default:
          break;
      }
    },

    setCostMagicStone(e) {
      switch (this.getTypeOfEnhance) {
        case 2:
          this.setInputCostMagicStone(e.target.value);
          break;
        case 3:
          this.setInputCostIntegrityStone(e.target.value);
          break;
        case 4:
          this.setInputCostChaosStone(e.target.value);
          break;
        case 5:
          this.setInputCostManosStone(e.target.value);
          break;

        default:
          break;
      }

      this.setChanger();
    },
    setCostCookie(e) {
      this.setInputCostCookie(e.target.value);
      this.setChanger();
    },
    setCostCron(e) {
      this.setInputCostCron(e.target.value);
      this.setChanger();
    },
  },
  computed: {
    ...mapGetters('result', [
      'getResultJewelry',
      'getResultArmor',
      'getResultBlackstar',
      'getResultArmorGod',
      'getResultManos',
      'getTax',
      'getChanger',
      'getPriceCookie',
      'getPriceCron',
    ]),
    ...mapGetters('data', [
      'getEnhanceJewelry',
      'getEnhanceArmor',
      'getEnhanceArmorGod',
      'getEnhanceBlackstar',
      'getEnhanceManos',
      'getTypeOfEnhance',
      'getUseManos',
    ]),
    ...mapGetters('statistics', [
      'getStatisticalDataJewelry',
      'getStatisticalDataArmor',
      'getStatisticalDataArmorGod',
      'getStatisticalDataBlackstar',
      'getStatisticalDataManos',
    ]),

    getResult() {
      switch (this.getTypeOfEnhance) {
        case 1:
          return this.getResultJewelry;
        case 2:
          return this.getResultArmor;
        case 3:
          return this.getResultBlackstar;
        case 4:
          return this.getResultArmorGod;
        case 5:
          return this.getResultManos;
      }
      return null;
    },
  },

  watch: {
    getChanger() {
      this.calculateResult(); //совершает перерасчет при каждом изменении стоимости
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/style/main.scss';
@import '../assets/style/responsive.scss';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
.result-wrapper {
  background: #201d19;
  padding-top: 80px;
  padding-bottom: 379px;
  height: 100%;
}

.bottom-block {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
.bottom-block__item {
  display: flex;
  flex-direction: column;
}
.bottom-block__el {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.bottom-block__el-heading {
  color: #ffeed5;
  font-size: 17px;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
  width: 120px;
  font-weight: 600;
  font-style: bold;
}
.tax {
  width: auto !important;
}
.bottom-block__el-span {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  .bottom-block__input {
    width: 60px;
    text-align: center;
    color: #201d19;
    font-size: 15px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    background: #ffeed5;
    border: none;
    border-radius: 2px;
    padding: 1px 2px;
  }
  .bottom-block__img {
    width: 40px;
    margin-right: 5px;
  }
  .bottom-block__fail-text {
    width: 45px;
    color: #fff0d5;
    font-size: 18px;
    margin-right: 10px;
  }
}
.material-img {
  width: 35px !important;
  margin-right: 10px !important;
}

.failstack-span {
  margin-bottom: 10px;
}
.deactive-failstack {
  color: #37b2b2;
  cursor: none;
}
.bottom-block_center {
  .bottom-block__center-el {
    color: #ffeed5;
    font-size: 18px;
    display: flex;
    align-items: left;
    margin-bottom: 0px;
    .result-text {
      width: 120px;
      margin-right: 10px;
      text-transform: uppercase;
      margin-left: 12px;
    }
  }
}
.center-rhomb {
  background: url('../assets/img/result-border.png') no-repeat;
  background-size: cover;
  width: 500px;
  height: 500px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.bottom-block__result {
  display: flex;
  flex-direction: column;
  width: 309px;
  margin-top: 15px;
}
.item-center {
  align-items: center;
}
.bottom-block__heading-result {
  color: #ffeed5;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 44.5px;
  margin-top: 120px;
  text-align: center;
  font-weight: 600;
  font-style: bold;
}
.top-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  .discription {
    text-align: center;
    width: 800px;
    border: 2px solid rgba(255, 0, 0, 0.363);
    border-radius: 6px;
    padding: 7px;
    color: #ffeed5a9;
    background-color: #100e0c;
    margin-top: 30px;
    font-size: 14px;
  }
  .main-heading {
    text-align: center;
    color: #ffeed5;
    font-weight: 400;
    font-size: 26px;
  }
}

.styled-input-single {
  position: relative;

  label {
    cursor: pointer;
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      border-radius: 50%;
    }
    &:before {
      left: 0;
      width: 30px;
      height: 30px;
      margin: -15px 0 0;
      background: #f7f7f7;
      box-shadow: 0 0 1px grey;
    }
    &:after {
      left: 5px;
      width: 20px;
      height: 20px;
      margin: -10px 0 0;
      opacity: 0;
      background: #37b2b2;
      transform: translate3d(-40px, 0, 0) scale(0.5);
      transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
    }
  }

  input[type='radio'],
  input[type='checkbox'] {
    position: absolute;
    top: 0;
    left: -9999px;
    visibility: hidden;

    &:checked + label {
      &:after {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
  }
}
.styled-input--diamond {
  padding-left: 7%;
  .styled-input-single {
    padding-left: 40px;
    margin-right: 5px;
    margin-left: 10px;
  }
  label {
    &:before,
    &:after {
      border-radius: 0;
    }
    &:before {
      transform: rotate(45deg);
    }
  }

  input[type='radio'],
  input[type='checkbox'] {
    &:checked + label {
      &:after {
        transform: rotate(45deg);
        opacity: 1;
      }
    }
  }
}
.radio-box {
  display: flex;
}
.text-radio {
  color: #ffeed5;
  font-size: 16px;
}

$color-alpha: #b78846;

.box-left {
  transform: translate3d(0%, 0%, 0);
  background-color: rgba(#000, 0.5);
  padding: 5px;
  border: 2px solid $color-alpha;
  &:before,
  &:after {
    content: '•';
    position: absolute;
    width: 14px;
    height: 14px;
    font-size: 14px;
    color: $color-alpha;
    border: 2px solid $color-alpha;
    line-height: 12px;
    top: 5px;
    text-align: center;
  }
  &:before {
    left: 5px;
  }
  &:after {
    right: 5px;
  }
  .box-inner-left {
    position: relative;
    border: 2px solid $color-alpha;
    padding: 40px;
    box-sizing: border-box;
    &:before,
    &:after {
      content: '•';
      position: absolute;
      width: 18px;
      height: 18px;
      font-size: 14px;
      color: $color-alpha;
      border: 2px solid $color-alpha;
      line-height: 12px;
      bottom: -1.5px;
      text-align: center;
      box-sizing: border-box;
    }
    &:before {
      left: -2px;
    }
    &:after {
      right: -2px;
    }
  }
}
.box-right {
  transform: translate3d(0%, 0%, 0);
  background-color: rgba(#000, 0.5);
  padding: 5px;
  border: 2px solid $color-alpha;

  &:before,
  &:after {
    content: '•';
    position: absolute;
    width: 14px;
    height: 14px;
    font-size: 14px;
    color: $color-alpha;
    border: 2px solid $color-alpha;
    line-height: 12px;
    top: 5px;
    text-align: center;
  }
  &:before {
    left: 5px;
  }
  &:after {
    right: 5px;
  }
  .box-inner-right {
    height: 100%;
    position: relative;
    border: 2px solid $color-alpha;
    padding: 40px;
    box-sizing: border-box;
    &:before,
    &:after {
      content: '•';
      position: absolute;
      width: 18px;
      height: 18px;
      font-size: 14px;
      color: $color-alpha;
      border: 2px solid $color-alpha;
      line-height: 12px;
      bottom: -1.5px;
      text-align: center;
      box-sizing: border-box;
    }
    &:before {
      left: -2px;
    }
    &:after {
      right: -2px;
    }
  }
}
.darkText {
  pointer-events: none;
  color: rgb(88, 87, 87) !important;
}
.darkWindow {
  pointer-events: none;
  color: rgb(88, 87, 87) !important;
  background-color: #292826 !important;
}
</style>

