import libphonenumber from 'google-libphonenumber';

export class CountryPhone {
  iso: string;
  name: string;
  code: string;
  sample_phone: string;

  constructor (iso: string, name: string) {
    this.iso = iso;
    this.name = name;

    let phoneUtil = libphonenumber.PhoneNumberUtil.getInstance(),
        PNF = libphonenumber.PhoneNumberFormat,
        PNT = libphonenumber.PhoneNumberType,
        country_example_number = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE),
        // Nous devons définir quel type de numéro de téléphone de pays nous allons utiliser comme masque.
        // Vous pouvez choisir entre plusieurs types, notamment :
        //    - LIGNE FIXE
        //    - MOBILE
        //    - Pour plus de types, veuillez vous référer au référentiel google libphonenumber (https://github.com/googlei18n/libphonenumber/blob/f9e9424769964ce1970c6ed2bd60b25b976dfe6f/javascript/i18n/phonenumbers/phonenumberutil.js#L913)
        example_number_formatted = phoneUtil.format(country_example_number, PNF.INTERNATIONAL);
        // Nous devons définir comment allons-nous formater le numéro de téléphone
        // Vous pouvez choisir entre de nombreux formats dont :
        //    - NATIONAL
        //    - INTERNATIONAL
        //    - E164
        //    - RFC3966

    this.sample_phone = example_number_formatted;
    this.code = "+" + country_example_number.getCountryCode();
  }
}
