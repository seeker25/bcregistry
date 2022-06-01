import { ProductCode } from '@/enums'
import { ProductI } from '@/interfaces'
import { appendAccountId } from 'sbc-common-components/src/util/common-util'

/**
 * Returns product info object for specified type.
 */
export function getProductInfo (config, type: ProductCode): ProductI {
  switch (type) {
    case ProductCode.BUSINESS:
      return {
        image: 'img/BCRS_dashboard_thumbnail_image.jpg',
        link: appendAccountId(config?.myBusinessRegistryDashboard) || 'link_not_configured',
        text: 'Register or incorporate a business, manage name requests and keep business records up to date.',
        title: 'My Business Registry'
      } as ProductI
    case ProductCode.BUSINESS_SEARCH:
      return {
        image: 'img/BusinessSearchFPO_dashboard_thumbnail_image.jpg',
        link: appendAccountId(config?.businessSearchUrl) || 'link_not_configured',
        text: 'Search for a business registered in B.C. and access business documents.',
        title: 'Business Search'
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
        image: 'img/PPR_dashboard_thumbnail_image.jpg',
        link: appendAccountId(config?.pprDashboard) || 'link_not_configured',
        text: 'Register or search for legal claims on personal property in British Columbia.',
        title: 'My Personal Property Registry'
      } as ProductI
    case ProductCode.RPT:
      return {
        image: 'img/RPT_dashboard_thumbnail_image.jpg',
        link: config?.rptURL || 'link_not_configured',
        text: `Search property tax records for rural properties or leased crown land in B.C.,
               excluding municipal and Indigenous lands.`,
        title: 'Rural Property Tax Search'
      } as ProductI
    case ProductCode.VS:
      return {
        image: 'img/VS_dashboard_thumbnail_image.jpg',
        link: appendAccountId(config?.willsURL) || 'link_not_configured',
        text: 'File a wills notice or search for an existing wills notice.',
        title: 'Wills Registry'
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
