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
    this.children = [].slice.call(element.children)

    let root = this.createDivWithClass('carousel')
    let container = this.createDivWithClass('carousel__container')
    root.appendChild(container)
    this.element.appendChild(root)
    
    this.children.forEach(child => {
      container.appendChild(child)
    });
  }

  /**
   * 
   * @param {string} className
   * @returns {HTMLElement}S
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

