class Carousel {
  /**
   *Creates an instance of Carousel.
   * @param {HTMLElement} element
   * @param {Object} options
   * @param {Object} options.slidesToScroll Nombre d'élément a scroller
   * @param {Object} options.slidesVisible Nombre d'élément visible dans un slide
   */
  constructor(element, options = {}) {
    this.element = element,
    this.options = Object.assign({}, {
      slidesToScroll: 1,
      slidesVisible: 1
    }, options)
    let children = [].slice.call(element.children)

    let root = this.createDivWithClass('carousel')
    this.container = this.createDivWithClass('carousel__container')

    root.appendChild(this.container)
    this.element.appendChild(root)
    
    this.items = children.map(child => {

      let item = this.createDivWithClass('carousel__item');

      item.appendChild(child);

      this.container.appendChild(item);

      return item
    })

    this.setStyle()
    this.createNavigation()
  }

  /**
   *Applique les bonnes dimensions aux éléments du caroussel
   *
   * @memberof Carousel
   */
  setStyle() {
    let ratio = this.items.length / this.options.slidesVisible;
    this.container.style.width  = (ratio * 100)+"%";

    this.items.forEach( item => {
      item.style.width = ((100 /  this.options.slidesVisible) / ratio) + "%";
    });
  }

  createNavigation() {

  }

  /**
   * fonction de création de div en paramètre la classe
   * @param {string} className
   * @returns {HTMLElement}
   */
  createDivWithClass(className) {
    let div = document.createElement('div');
    div.setAttribute('class', className)

    return div
  }
}

document.addEventListener('DOMContentLoaded', function () { 
  new Carousel(document.querySelector('#carousel1'), {
    slidesVisible: 3
  })
 })

