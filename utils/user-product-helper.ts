import { ProductCode } from '@/enums'
import { ProductI } from '@/interfaces'

export const getProductInfo = (config, type: ProductCode): ProductI => {
  switch (type) {
    case ProductCode.BUSINESS:
      return {
        image: 'BCRS_dashboard_thumbnail_image',
        link: config?.authURL + 'home/maintain-business' || 'link_not_configured',
        text: 'Register or incorporate a business, manage name requests and keep business records up to date.',
        title: 'My Business Registry'
      } as ProductI
    case ProductCode.CSO:
      return {
        image: 'placeholder_image',
        link: 'placeholder_link',
        text: 'placeholder_text',
        title: 'placeholder_title'
      } as ProductI
    case ProductCode.PPR:
      return {
        image: 'PPR_dashboard_thumbnail_image',
        link: config?.pprURL || 'link_not_configured',
        text: 'Register or search for legal claims on personal property in British Columbia.',
        title: 'My Personal Property Registry'
      } as ProductI
    case ProductCode.RPT:
      return {
        image: 'placeholder_image',
        link: 'placeholder_link',
        text: 'placeholder_text',
        title: 'placeholder_title'
      } as ProductI
    case ProductCode.VS:
      return {
        image: 'placeholder_image',
        link: 'placeholder_link',
        text: 'placeholder_text',
        title: 'placeholder_title'
      } as ProductI
    default:
      return {
        image: 'placeholder_image',
        link: 'placeholder_link',
        text: 'placeholder_text',
        title: 'placeholder_title'
      } as ProductI
  }
}
