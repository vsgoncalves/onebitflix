// src/adminjs/index.ts


import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { sequelize } from '../database'
import { adminJsResources } from './resource'

AdminJs.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJs({
  databases: [sequelize],
  rootPath: '/admin',
  resources: adminJsResources,
  branding: {
    companyName: 'Carbografite',
    logo: '/cg.svg',
    theme: {
      colors: {
        primary100: '#006838',
	      primary80: '#006838',
	      primary60: '#009444',
	      primary40: '#009444',
		    primary20: '#39b54a',
	      grey100: '#151515',
	      grey80: '#333333',
	      grey60: '#4d4d4d',
	      grey40: '#666666',
	      grey20: '#dddddd',
	      filterBg: '#333333',
	      accent: '#151515',
	      hoverBg: '#151515',
      }
    }
  }
})

export const adminJsRouter = AdminJsExpress.buildRouter(adminJs)