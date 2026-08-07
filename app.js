/**
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function between(val, min, max) {
    return Math.max(min, Math.min(val, max))
}

/**
 * Gère le scaling a appliqué en fonction de la distance
 * @param {number}value
 */
function scaling (value){
Math.max(Math.min(-0.2 * Math.pow(d, 2) + 1.05, 1), 0)
}



/**
 * @property {HTMLElement} root
 * @property {HTMLElement[]} icons
 * @property {number} iconSize
 * @property {number} mousePosition
 */
class Dock{
    /**
     * @param {HTMLElement} element
     */
    constructor(element){

        this.root = element;
        this.icons = Array.from(element.children)
        if(this.icons.length === 0){
            return;
        }
        this.iconSize = this.icons[0].offsetWidth;
        element.addEventListener('mousemove', this.handleMouseMove.bind(this))
    }

    /**
     *
     * @param{MouseEvent} e
     */
    handleMouseMove(e){
        this.mousePosition = between(
            (e.clientX - this.root.offsetLeft) / this.iconSize,
            0,
            this.icons.length
        );

        this.scaleIcons();


    }

    /**
     * applique la transformation sur les icones
     */
    scaleIcons(){
        this.icons.forEach((icon,k) => {
            const center = k + 0.5
            const distanceFromPointer =
        })

    }
}

new Dock(document.querySelector(".dock"));