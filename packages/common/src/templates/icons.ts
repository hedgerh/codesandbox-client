import Adonis from '../components/logos/Adonis';
import React from '../components/logos/React';
import Angular from '../components/logos/Angular';
import Ember from '../components/logos/Ember';
import Parcel from '../components/logos/Parcel';
import Preact from '../components/logos/Preact';
import Vue from '../components/logos/Vue';
import Svelte from '../components/logos/Svelte';
import Sapper from '../components/logos/Sapper';
import Dojo from '../components/logos/Dojo';
import CxJS from '../components/logos/CxJS';
import Reason from '../components/logos/Reason';
import Gatsby from '../components/logos/Gatsby';
import Marko from '../components/logos/Marko';
import Next from '../components/logos/Next';
import Nuxt from '../components/logos/Nuxt';
import Node from '../components/logos/Node';
import Apollo from '../components/logos/Apollo';
import Nest from '../components/logos/Nest';
import Static from '../components/logos/Static';
import Styleguidist from '../components/logos/Styleguidist';
import VuePress from '../components/logos/VuePress';
import MDXDeck from '../components/logos/mdx-deck';
import GridSome from '../components/logos/Gridsome';

import {
  adonis,
  react,
  ember,
  vue,
  preact,
  reactTs,
  svelte,
  angular,
  parcel,
  dojo,
  cxjs,
  reason,
  gatsby,
  marko,
  next,
  nuxt,
  node,
  apollo,
  nest,
  sapper,
  staticTemplate,
  styleguidist,
  gridsome,
  vuepress,
  mdxDeck
} from './';

import { TemplateType } from './';

export type ReturnedIcon = React.SFC<{
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}>;

export default function getIcon(theme: TemplateType): ReturnedIcon {
  switch (theme) {
    case adonis.name:
      return Adonis;
    case react.name:
      return React;
    case vue.name:
      return Vue;
    case preact.name:
      return Preact;
    case reactTs.name:
      return React;
    case svelte.name:
      return Svelte;
    case angular.name:
      return Angular;
    case parcel.name:
      return Parcel;
    case dojo.name:
      return Dojo;
    case ember.name:
      return Ember;
    case sapper.name:
      return Sapper;
    case cxjs.name:
      return CxJS;
    case reason.name:
      return Reason;
    case gatsby.name:
      return Gatsby;
    case marko.name:
      return Marko;
    case next.name:
      return Next;
    case nuxt.name:
      return Nuxt;
    case node.name:
      return Node;
    case apollo.name:
      return Apollo;
    case nest.name:
      return Nest;
    case staticTemplate.name:
      return Static;
    case styleguidist.name:
      return Styleguidist;
    case gridsome.name:
      return GridSome;
    case vuepress.name:
      return VuePress;
    case mdxDeck.name:
      return MDXDeck;
    default:
      return React;
  }
}
