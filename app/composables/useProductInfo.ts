import type { APIProduct, Product } from '~/interfaces/product'
import { ProductCode } from '~/enums/product-code'
import { ProductStatus } from '~/enums/product-status'

export const useProductInfo = () => {
  const rtc = useRuntimeConfig().public
  const ldStore = useConnectLaunchdarklyStore()
  const accountStore = useConnectAccountStore()
  const t = useNuxtApp().$i18n.t
  const { $keycloak } = useNuxtApp()

  function appendAccountId(url: string): string {
    return url ? `${url}?accountid=${accountStore.currentAccount.id}` : 'link_not_configured'
  }

  /**
    * Returns product info object for specified type.
  */
  function getProductInfo(type: ProductCode): Product {
    const accountId = accountStore.currentAccount.id.toString()

    switch (type) {
      case ProductCode.BUSINESS:
        return {
          image: 'img/BCRS_dashboard_thumbnail_image.jpg',
          link: rtc.myBusinessRegistryDashboard.replace('{accountId}', accountId) || 'link_not_configured',
          text: t('page.dashboard.products.business.text'),
          title: t('page.dashboard.products.business.title')
        } as Product
      case ProductCode.BUSINESS_SEARCH:
        return {
          image: 'img/business_search_product_image.jpg',
          link: appendAccountId(rtc.businessSearchUrl),
          text: t('page.dashboard.products.busSearch.text'),
          title: t('page.dashboard.products.busSearch.title')
        } as Product
      case ProductCode.BUSINESS_PERSON_SEARCH:
        return {
          image: 'img/business_search_product_image.jpg',
          link: appendAccountId(rtc.ndsUrl) || 'link_not_configured',
          text: t('page.dashboard.products.busPersonSearch.text'),
          title: t('page.dashboard.products.busPersonSearch.title')
        } as Product
      case ProductCode.BCA:
        return {
          image: 'img/BCA_dashboard_thumbnail_image.jpg',
          link: appendAccountId(rtc.bcaURL),
          text: t('page.dashboard.products.bca.text'),
          title: t('page.dashboard.products.bca.title')
        } as Product
      case ProductCode.CSO:
        return {
          image: 'img/CSO_dashboard_thumbnail_image.jpg',
          link: appendAccountId(rtc.csoURL),
          text: t('page.dashboard.products.cso.text'),
          title: t('page.dashboard.products.cso.title')
        } as Product
      case ProductCode.MHR:
        return {
          image: 'img/MHR_dashboard_thumbnail_image.jpg',
          link: appendAccountId(rtc.pprDashboard),
          text: t('page.dashboard.products.mhr.text'),
          title: t('page.dashboard.products.mhr.title')
        } as Product
      case ProductCode.NDS:
        return {
          image: 'img/NDS_dashboard_thumbnail_image.jpg',
          link: appendAccountId(rtc.ndsUrl),
          text: t('page.dashboard.products.nds.text'),
          title: t('page.dashboard.products.nds.title')
        } as Product
      case ProductCode.PPR:
        return {
          image: 'img/PPR_dashboard_thumbnail_image.jpg',
          link: appendAccountId(rtc.pprDashboard),
          text: t('page.dashboard.products.ppr.text'),
          title: t('page.dashboard.products.ppr.title')
        } as Product
      case ProductCode.RPT:
        return {
          image: 'img/RPT_dashboard_thumbnail_image.jpg',
          link: rtc.rptURL,
          text: t('page.dashboard.products.rpt.text'),
          title: t('page.dashboard.products.rpt.title')
        } as Product
      case ProductCode.ESRA:
        return {
          image: 'img/ESRA_dashboard_thumbnail_image.jpg',
          link: appendAccountId(rtc.siteRegistryURL),
          text: t('page.dashboard.products.esra.text'),
          title: t('page.dashboard.products.esra.title')
        } as Product
      case ProductCode.STRR:
        return {
          image: 'img/STRR_dashboard_thumbnail_image.jpg',
          link: appendAccountId(rtc.strrURL) || 'link_not_configured',
          text: t('page.dashboard.products.strr.text'),
          title: t('page.dashboard.products.strr.title')
        } as Product
      case ProductCode.VS:
        return {
          image: 'img/VS_dashboard_thumbnail_image.jpg',
          link: appendAccountId(rtc.willsURL),
          text: t('page.dashboard.products.vs.text'),
          title: t('page.dashboard.products.vs.title')
        } as Product
      default:
        return {
          image: 'placeholder_image',
          link: 'placeholder_link',
          text: 'placeholder_text',
          title: 'placeholder_title'
        } as Product
    }
  }

  /**
    * Get info for My Asset Registries tile (that replaces MHR and PPR products)
  */
  function getMhrPprTileInfo(): Product {
    return {
      image: 'img/My_Asset_Registries_dashboard_thumbnail_image.jpg',
      link: appendAccountId(rtc.pprDashboard) || 'link_not_configured',
      text: t('page.dashboard.products.mar.text'),
      title: t('page.dashboard.products.mar.title')
    }
  }

  /**
    * Check if products array has MHR and PPR
  */
  function hasMhrAndPprProducts(products: Array<APIProduct>): boolean {
    return products
      .filter(product => product.code === ProductCode.MHR || product.code === ProductCode.PPR)
      .length === 2
  }

  function hasDefaultValue(flagName: string): boolean {
    return Object.keys(ldStore.ldFlagSet).includes(flagName)
  }

  async function getActiveUserProducts() {
    const userProducts: Product[] = []
    const accountId = accountStore.currentAccount.id

    // using $fetch giving type mismatch
    const response = await fetch(`${rtc.authApiURL}/orgs/${accountId}/products?include_hidden=true`, {
      headers: {
        Authorization: `Bearer ${$keycloak.token}`
      }
    })

    const activeProducts = (await response.json() as APIProduct[])
      .filter(product => product.subscriptionStatus === ProductStatus.ACTIVE)

    let hasCombinedSearch = false
    const searchProductCodes = [ProductCode.BUSINESS_SEARCH, ProductCode.NDS, ProductCode.CA_SEARCH]

    // only show products with no placeholder
    for (let i = 0; i < activeProducts.length; i++) {
      let productCode = activeProducts[i]?.code
      const enabledFF = `bcregistry-ui-${productCode}-enabled`.toLowerCase()
      // ensure has a default (otherwise it might not have an enabled flag set in LD)
      if (hasDefaultValue(enabledFF) && !ldStore.getStoredFlag(enabledFF)) {
        // skip disabled products
        continue
      }

      if (searchProductCodes.includes(productCode) && ldStore.getStoredFlag('bcregistry-ui-combine-search-tile')) {
        if (hasCombinedSearch) {
          // skip search this product since the new Business and Person Search is already in subscribedProducts
          continue
        } else {
          hasCombinedSearch = true
          productCode = ProductCode.BUSINESS_PERSON_SEARCH
        }
      }

      let thisProduct = getProductInfo(productCode)

      if (thisProduct.title === 'placeholder_title') {
        console.error('Product tile not implemented:', productCode)
        continue
      }

      // block for MHR/PPR special rules
      if (hasMhrAndPprProducts(activeProducts)) {
        if (activeProducts[i]?.code === ProductCode.PPR) {
          // replace ppr tile with assets
          thisProduct = getMhrPprTileInfo()
        } else if (activeProducts[i]?.code === ProductCode.MHR) {
          // skip mhr product (included with assets tile)
          continue
        }
      }

      userProducts.push(thisProduct)
    }

    return userProducts
  }

  return {
    getProductInfo,
    getMhrPprTileInfo,
    hasMhrAndPprProducts,
    getActiveUserProducts
  }
}
