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
    let children = [].slice.call(element.children);

    this.currentItem = 0; // première item(slide)

    this.root = this.createDivWithClass('carousel');
    this.container = this.createDivWithClass('carousel__container');

    this.root.appendChild(this.container)
    this.element.appendChild(this.root)
    
    this.items = children.map(child => {

      let item = this.createDivWithClass('carousel__item');

      item.appendChild(child);

      this.container.appendChild(item);

      return item;
    })

    this.setStyle()
    this.createNavigation()
  }

  /**
   *Applique les bonnes dimensions aux éléments du carousel
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

  
/**
 *Ajout d'élément pour faire defiler le carousel
 *
 * @memberof Carousel
 */
createNavigation() {
    let nextButton = this.createDivWithClass('carousel__next')
    let prevButton = this.createDivWithClass('carousel__prev')

    this.root.appendChild(nextButton)
    this.root.appendChild(prevButton)

    nextButton.addEventListener('click', this.next.bind(this))
    prevButton.addEventListener('click', this.prev.bind(this))
  }

  next() {

  }

  prev() {

  }

  
/**
 *
 *Déplace le carousel vers l'élément ciblé
 * @param {number} index
 * @memberof Carousel
 */
goToItem(index) {

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

