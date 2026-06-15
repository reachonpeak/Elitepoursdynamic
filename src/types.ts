/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  specs: string[];
  basePricePerSqm: number;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  tagline: string;
  desc: string;
}

export interface Testimonial {
  id: string;
  author: string;
  date: string;
  text: string;
  rating: number;
  avatarUrl: string;
  verified: boolean;
}

export interface QuoteEstimate {
  serviceId: string;
  areaSqm: number;
  thicknessMm: 100 | 125 | 150;
  reinforcement: 'standard' | 'double' | 'heavy-duty';
  excavationRequired: boolean;
  totalEstimatedMin: number;
  totalEstimatedMax: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'driveways' | 'masonry' | 'slabs' | 'epoxy';
  location: string;
  image: string;
  dimensions: string;
  completion: string;
  specs: string[];
  description: string;
  testimonialId?: string;
  beforeImage?: string;
}
