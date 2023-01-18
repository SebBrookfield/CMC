type DeviceInfo = {
  brand: string
  product: string
  device: string
  android_uuid: string
  device_manufacturer: string
  platform: string
  os_version: string
  device_model: string
  screen_height: number
  screen_width: number
  screen_dpi: number
  device_country: string
  locale_language: string
  locale_country: string
  network_country: string
  network_carrier: string
  network_code: string
  network_mobile_country_code: string
  timezone_offset: number
  build_identifier: string
  http_header_user_agent: string
  ios_advertising_id: string
  att_authorization_status: string
  att_timestamp_unixtime_ms: number
  push_token: string
  cpu_architecture: string
  is_tablet: boolean
  push_notification_sound_enabled: boolean
  push_notification_vibrate_enabled: boolean
  radio_access_technology: string
  supports_telephony: string
  has_nfc: boolean
  bluetooth_enabled: boolean
  bluetooth_version: string
  ios_idfv: string
  android_advertising_id: string
  limit_ad_tracking: boolean
  is_dst: boolean
}

type ApplicationInfo = {
  application_name: string
  application_version: string
  application_build_number: string
  install_referrer: string
  package: string
}

type UserAttributes = {
  $age: string
  $gender: string
  $country: string
  $zip: string
  $city: string
  $state: string
  $address: string
  $firstname: string
  $lastname: string
  $mobile: string
  a_custom_attribute: string
  a_custom_list: [string]
}

type UserIdentities = {
  customer_id: string
  email: string
  account_id: string
}

type PartnerIdentities = {
  partner_id: string
}

type Event = {
  data: EventData
  event_type: string
  event_id: number
}

type EventData = {
  timestamp_unixtime_ms: number
  source_message_id: string
  session_uuid: string
  trade_instrument_code: string
  trade_price: number
  quantity: number
  currency: string
}

export type BrokerEvent = {
  schema_version: number
  environment: string
  device_info: DeviceInfo
  application_info: ApplicationInfo
  user_attributes: UserAttributes
  user_identities: UserIdentities
  partner_identities: PartnerIdentities
  event: Event
  hedge_codes: [string]
}
