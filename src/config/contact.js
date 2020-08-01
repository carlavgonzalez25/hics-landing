import {
  office_bsas,
  office_rd,
  office_usa,
  icon_clock,
  icon_envelope,
  icon_mapMarker,
  icon_mobile,
  flag_arg,
  flag_usa,
  flag_rd,
} from '../img'

export default [
  {
    flag: flag_usa,
    imgUrl: office_usa,
    icon: {
      address: icon_mapMarker,
      tel: icon_mobile,
      time: icon_clock,
      mail: icon_envelope,
    },
    name: 'Usa',
    address: '1001 Brickwell Ave, 32 Floor, Miami Florida',
    tel: '+1 (609)287 7400',
    mail: 'info@hicsvydacapital.com',
    time: 'Mon-Fri 09-18',
  },
  {
    flag: flag_arg,
    imgUrl: office_bsas,
    icon: {
      address: icon_mapMarker,
      tel: icon_mobile,
      time: icon_clock,
      mail: icon_envelope,
    },
    name: 'Argentina',
    address: 'San Lorenzo 321, Paraná, Entre Rios',
    tel: '+54 (0343) 420-3488',
    mail: 'info@hicsvydacapital.com',
    time: 'Mon-Fri 09-18',
  },
  {
    flag: flag_rd,
    imgUrl: office_rd,
    icon: {
      address: icon_mapMarker,
      tel: icon_mobile,
      time: icon_clock,
      mail: icon_envelope,
    },
    name: 'Rep. Dominicana',
    address: 'Calle Erik Leonard Ekman No. 33, Edificio Corporativo, suite 203, Santo Domingo',
    tel: '+1 (809) 414-6025',
    mail: 'info@hicsvydacapital.com',
    time: 'Mon-Fri 10-18',
  },
]
