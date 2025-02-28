import { appendAccountId } from 'sbc-common-components/src/util/common-util'
import ConfigHelper from 'sbc-common-components/src/util/config-helper'
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
import { ProductI, APIProductI } from '@/interfaces'
import { ProductCode } from '@/enums'

/**
 * Returns product info object for specified type.
 */
export function getProductInfo (config, type: ProductCode): ProductI {
  switch (type) {
    case ProductCode.BUSINESS:
      return {
        image: 'img/BCRS_dashboard_thumbnail_image.jpg',
        link: config?.myBusinessRegistryDashboard?.replace('{accountId}', currentAccountId()) || 'link_not_configured',
        text: 'Register or incorporate a business, manage name requests and keep business records up to date.',
        title: 'My Business Registry'
      } as ProductI
    case ProductCode.BUSINESS_SEARCH:
      return {
        image: 'img/business_search_product_image.jpg',
        link: appendAccountId(config?.businessSearchUrl) || 'link_not_configured',
        text: 'Search for businesses registered in B.C. and access business documents.',
        title: 'Business Search'
      } as ProductI
    case ProductCode.BUSINESS_PERSON_SEARCH:
      return {
        image: 'img/business_search_product_image.jpg',
        link: appendAccountId(config?.ndsUrl) || 'link_not_configured',
        text: 'Search for registered BC businesses and individuals related to those businesses and access documents.',
        title: 'Business and Person Search'
      } as ProductI
    case ProductCode.BCA:
      return {
        image: 'img/BCA_dashboard_thumbnail_image.jpg',
        link: appendAccountId(config?.bcaURL) || 'link_not_configured',
        // eslint-disable-next-line max-len
        text: 'Generate a BC Assessment report to find real property ownership or location information, obtain property assessment information or obtain residential property inventory details for properties within British Columbia.',
        title: 'BC Assessment'
      } as ProductI
    case ProductCode.CSO:
      return {
        image: 'img/CSO_dashboard_thumbnail_image.jpg',
        link: appendAccountId(config?.csoURL) || 'link_not_configured',
        // eslint-disable-next-line max-len
        text: 'Make applications or file other court documents, browse daily court listings, and search court file information.',
        title: 'Court Services Online'
      } as ProductI
    case ProductCode.MHR:
      return {
        image: 'img/MHR_dashboard_thumbnail_image.jpg',
        link: appendAccountId(config?.pprDashboard) || 'link_not_configured',
        // eslint-disable-next-line max-len
        text: 'Search for manufactured homes, and search for personal property legal claims on manufactured homes.',
        title: 'My Manufactured Home Registry'
      } as ProductI
    case ProductCode.NDS:
      return {
        image: 'img/NDS_dashboard_thumbnail_image.jpg',
        link: appendAccountId(config?.ndsUrl) || 'link_not_configured',
        text: 'Search for the names and addresses of people associated with businesses in B.C.',
        title: 'Director Search'
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
    case ProductCode.ESRA:
      return {
        image: 'img/ESRA_dashboard_thumbnail_image.jpg',
        link: appendAccountId(config?.siteRegistryURL) || 'link_not_configured',
        text: 'Search for B.C. government information on the environmental condition of land.',
        title: 'Site Registry'
      } as ProductI
    case ProductCode.STRR:
      return {
        image: 'img/STRR_dashboard_thumbnail_image.jpg',
        link: appendAccountId(config?.strrURL) || 'link_not_configured',
        text: 'Register your short-term rental property, platform service provider, or ' +
             'strata-titled hotel or motel with the province.',
        title: 'Short-Term Rental Registry'
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

/**
 * Get info for My Asset Registries tile (that replaces MHR and PPR products)
 */
export function getMhrPprTileInfo(config): ProductI {
  return {
    image: 'img/My_Asset_Registries_dashboard_thumbnail_image.jpg',
    link: appendAccountId(config?.pprDashboard) || 'link_not_configured',
    text: 'Search for manufactured homes, and register or search for legal claims on personal property.',
    title: 'My Asset Registries'
  }
}

/**
 * Check if products array has MHR and PPR
 */
export function hasMhrAndPprProducts(products: Array<APIProductI>): boolean {
  return products
  .filter(product => product.code === ProductCode.MHR || product.code === ProductCode.PPR)
  .length === 2
}

export function currentAccountId () {
  return JSON.parse(ConfigHelper.getFromSession(SessionStorageKeys.CurrentAccount) || '{}').id || ''
}
