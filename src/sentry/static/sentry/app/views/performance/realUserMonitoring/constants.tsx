import {t} from 'app/locale';
import {WebVital, measurementType} from 'app/utils/discover/fields';
import {SelectValue} from 'app/types';

import {Vital} from './types';

export const NUM_BUCKETS = 100;

export const PERCENTILE = 0.75;

export const WEB_VITAL_DETAILS: Record<WebVital, Vital> = {
  [WebVital.FP]: {
    slug: 'fp',
    name: t('First Paint'),
    description: t(
      'Render time of the first pixel loaded in the viewport (may overlap with FCP).'
    ),
    failureThreshold: 4000,
    type: measurementType(WebVital.FP),
    display: true,
  },
  [WebVital.FCP]: {
    slug: 'fcp',
    name: t('First Contentful Paint'),
    description: t(
      'Render time of the first image, text or other DOM node in the viewport.'
    ),
    failureThreshold: 4000,
    type: measurementType(WebVital.FCP),
    display: true,
  },
  [WebVital.LCP]: {
    slug: 'lcp',
    name: t('Largest Contentful Paint'),
    description: t(
      'Render time of the largest image, text or other DOM node in the viewport.'
    ),
    failureThreshold: 4000,
    type: measurementType(WebVital.LCP),
    display: true,
  },
  [WebVital.FID]: {
    slug: 'fid',
    name: t('First Input Delay'),
    description: t(
      'Response time of the browser to a user interaction (clicking, tapping, etc).'
    ),
    failureThreshold: 300,
    type: measurementType(WebVital.FID),
    display: true,
  },
  [WebVital.CLS]: {
    slug: 'cls',
    name: t('Cumulative Layout Shift'),
    description: t(
      'The sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.'
    ),
    failureThreshold: 0.1,
    type: measurementType(WebVital.CLS),
    display: false,
  },
  [WebVital.TTFB]: {
    slug: 'ttfb',
    name: t('Time to First Byte'),
    description: t(
      "The time that it takes for a user's browser to receive the first byte of page content."
    ),
    failureThreshold: 600,
    type: measurementType(WebVital.TTFB),
    display: false,
  },
  [WebVital.RequestTime]: {
    slug: 'ttfb.requesttime',
    name: t('Request Time'),
    description: t(
      'Captures the time spent making the request and receiving the first byte of the response.'
    ),
    failureThreshold: 600,
    type: measurementType(WebVital.TTFB),
    display: false,
  },
};

export const FILTER_OPTIONS: SelectValue<string>[] = [
  {label: t('Exclude Outliers'), value: 'exclude_outliers'},
  {label: t('View All'), value: 'all'},
];
