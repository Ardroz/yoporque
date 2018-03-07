/**
 * @customElement
 * @polymer
 */
class SwipeMexicoApp extends Polymer.Element {
  static get is() { return 'swipe-mexico-app'; }

  static get properties() {
    return {
      results: {
        type: Array,
        value: []
      }
    };
  }

  _swipeDone (ev) {
    var that = this,
      options = ['A', 'B'],
      currentStep = parseInt(ev.detail.target.dataset.step, 10),
      nextStep = currentStep + 1;

    if (currentStep > 0) {
      that.push('results', ev.detail.target.dataset.value);
    }
    console.log(that.$);
    console.log(that.$["step" + currentStep]);
    console.log(that.$["step" + nextStep]);

    if (that.$["step" + currentStep]) {
      that.$["step" + currentStep].setAttribute('hidden', '');
    }
    if (that.$["step" + nextStep]) {
      that.$["step" + nextStep].removeAttribute('hidden');
    }

    if (ev.detail.target.dataset.final) {
      that.$.stepfinal.hidden = false;
    }
  }
}

window.customElements.define(SwipeMexicoApp.is, SwipeMexicoApp);
