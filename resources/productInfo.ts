import { ProductCode } from '@/enums'
import { ProductI } from '@/interfaces'

export const ProductInfo = {
  [ProductCode.BUSINESS]: {
    image: 'BCRS_dashboard_thumbnail_image',
    link: 'https://dev.bcregistry.ca/business/auth/home/decide-business',
    text: 'Register or incorporate a business, manage name requests and keep business records up to date.',
    title: 'My Business Registry'
  } as ProductI,
  [ProductCode.CSO]: {
    image: 'placeholder_image',
    link: 'placeholder_link',
    text: 'placeholder_text',
    title: 'placeholder_title'
  } as ProductI,
  [ProductCode.PPR]: {
    image: 'PPR_dashboard_thumbnail_image',
    link: 'https://ppr-ui-dev.apps.silver.devops.gov.bc.ca/ppr',
    text: 'Register or search for legal claims on personal property in BC.',
    title: 'My Personal Property Registry'
  } as ProductI,
  [ProductCode.RPT]: {
    image: 'placeholder_image',
    link: 'placeholder_link',
    text: 'placeholder_text',
    title: 'placeholder_title'
  } as ProductI,
  [ProductCode.VS]: {
    image: 'placeholder_image',
    link: 'placeholder_link',
    text: 'placeholder_text',
    title: 'placeholder_title'
  } as ProductI
}