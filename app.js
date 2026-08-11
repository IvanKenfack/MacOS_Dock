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
return Math.max(Math.min(-0.2 * Math.pow(value, 2) + 1.05, 1), 0)
}

const TransformOrigins = {
    '-1' : 'right',
    '0' : 'center',
    '1' : 'left',
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

    scale = 1
    constructor(element){

        this.root = element;
        this.icons = Array.from(element.children)
        if(this.icons.length === 0){
            return;
        }
        this.iconSize = this.icons[0].offsetWidth;
        element.addEventListener('mousemove', this.handleMouseMove.bind(this))
        element.addEventListener('mouseleave', this.handleMouseLeave.bind(this))
        element.addEventListener('mouseenter', this.handleMouseEnter.bind(this))
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

    handleMouseLeave(){
        this.icons.forEach(icon => {
            icon.style.removeProperty("transform");
            icon.style.removeProperty("transform-origin");
        })
    }

    handleMouseEnter(){
        this.root.classList.add('animated')
        window.setTimeout(() => {
            this.root.classList.remove('animated')
        }, 100)

    }
    /**
     * applique la transformation sur les icones
     */
    scaleIcons(){
        const selectedIndex = Math.floor(this.mousePosition)
        const centerOffset = this.mousePosition - selectedIndex - 0.5
        let baseOffset = this.scaleFromDirection(
            selectedIndex,
            0,
            -centerOffset * this.iconSize
        )
        let offset = baseOffset *  (0.5 - centerOffset)
        for (let i = selectedIndex + 1; i < this.icons.length; i++){
            offset += this.scaleFromDirection(i,1,offset)
        }
        offset = baseOffset * (0.5 + centerOffset)
        for (let i = selectedIndex - 1; i >= 0; i--){
            offset += this.scaleFromDirection(i,-1,-offset)
        }
    }

    /**
     *
     * @param {number} index Index de l'icône à agrandir
     * @param {number} direction Position de l'icône (0: centre, -1: gauche, 1: droite)
     * @param {number} offset
     */
    scaleFromDirection(index, direction, offset){
        const center = index + 0.5
        const distanceFromPointer = this.mousePosition - center
        const scale = scaling(distanceFromPointer) * this.scale
        const icon = this.icons[index]
        icon.style.setProperty(
            'transform',
            `translateX(${offset}px) scale(${scale + 1})`
        )
        icon.style.setProperty("transform-origin", `${TransformOrigins[direction.toString()]} bottom`)
        return scale * this.iconSize
    }
}

new Dock(document.querySelector(".dock"));