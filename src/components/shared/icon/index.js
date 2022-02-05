import React from 'react';
import styles from './icon.css';
import { toCamelCase } from '../../../utilities/helpers';

const emojiMap = {
  hotel: '🏠',
  swimming: '🏊',
  hiking: '🚶',
  fishing: '🎣',
  spa: '💆',
  facialTreatments: '💆',
  canoeing: '🛶',
  mountain: '⛰️',
  mountainBiking: '🚵‍',
  mountainCableway: '🚠',
  motorBoat: '🛥️',
  sea: '🌊',
  ocean: '🌊',
  rowing: '🚣‍',
  sailing: '🚣‍',
  smile: '😀',
  ski: '🎿',
  golf: '⛳',
  bowling: '🎳',
  halloween: '🎃',
  christmas: '🎄',
  fire: '🔥',
  car: '🚗',
  parking: '🚗',
  taxi: '🚕',
  bus: '🚌',
  train: '🚂',
  hotTub: '🛀',
  safe: '🔐',
  diving: '🥽',
  snorkeling: '🥽',
  flatscreenTV: '📺',
  '24-hourFrontDesk': '🛎',
  camping: '⛺',
  bar: '🍺',
  restaurant: '🍔',
  meetingRooms: '💼',
  businessCenterWithInternetAccess: '💼',
  pool: '🏊',
  indoorPool: '🏊',
  concierge: '💂',
  banquetRoom: '🎉',
  gym: '🧘',
  breakfastAvailable: '🥐',
  laundryService: '👕',
  dryCleaning: '👗',
  germany: '🇩🇪',
  petsAllowed: '🐶',
  internet: '💻',
  drinking: '🍷',
};

export const Icon = ({ icon, size = '1em', className }) => (
  <span
    className={`${styles.icon} ${styles[icon]} ${className}`}
    style={{ fontSize: size }}
  />
);

export const Emoji = ({ name, size = '1em', className }) => (
  <span
    className={`${styles.emoji} ${className}`}
    style={{ fontSize: size }}
  >
    {emojiMap[toCamelCase(name)] || emojiMap.smile}
  </span>
);

/**
 * Renders flag of Germany, Switzerland or Austria.
 *
 * @param {String} country - A choice of germany, austria and switzerland
 * @param {String} size - A choice of small, medium and big
 * @param {String} className - Custom class name
 */
export const Flag = ({ country, size = 'small', className }) => (
  <span className={`${styles.flag} ${styles[country]} ${styles[size]} ${className}`} />
);
