import headerLogo from '../../../assets/header-logo.svg'
import burgerMenu from '../../../assets/burger-menu.svg'
import '../mobile/mobile-header.scss'
export const createMobileHeader = (): HTMLElement => {
    const header = document.createElement('header')
    header.classList.add('mobile-header')

    const brand = document.createElement('div')
    brand.classList.add('mobile-header__brand')

    const logo = document.createElement('img')
    logo.src = headerLogo
    logo.alt = 'Minigames logo'

    const text = document.createElement('span')
    text.textContent = 'MiniGames'
    text.classList.add('mobile-header__text')
    const menuButton = document.createElement('button')
    menuButton.type = 'button'
    menuButton.setAttribute('aria-label', 'Open menu')
    menuButton.classList.add('mobile-header__menu-button')

    const burgerIcon = document.createElement('img')
    burgerIcon.src = burgerMenu
    burgerIcon.alt = ''

    brand.append(logo, text)
    menuButton.append(burgerIcon)
    header.append(brand, menuButton)

    return header
}
