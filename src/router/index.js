import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Market from '@/components/Market'
import dealViewer from '@/components/dealViewer'
import ASReport from '@/components/ASReport'
import Digital from '@/components/DealViewer/Digital'
import OOH from '@/components/DealViewer/OOH'
import TV from '@/components/DealViewer/TV'
import Radio from '@/components/DealViewer/Radio'
import Magazine from '@/components/DealViewer/Magazine'
import Newspaper from '@/components/DealViewer/Newspaper'
import Settings from '@/components/Settings'
import marketReport from '@/components/ASReport/Offline/marketReport'
import budgetSummary from '@/components/ASReport/Offline/budgetSummary'
import TVSummary from '@/components/ASReport/Offline/TVSummary'
import TVCost from '@/components/ASReport/Offline/TVCost'
import PrintSummary from '@/components/ASReport/Offline/PrintSummary'
import OtherSummary from '@/components/ASReport/Offline/OtherSummary'

import OnmarketReport from '@/components/ASReport/Online/marketReport'
import OnbudgetSummary from '@/components/ASReport/Online/budgetSummary'
import OnTVSummary from '@/components/ASReport/Online/TVSummary'
import OnlineSummary from '@/components/ASReport/Online/OnlineSummary'








Vue.use(Router)

export default new Router({
  base:'/BMW/',
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/dealViewer',
    name: 'Home',
    component: Home,
    children: [{
        path: '/dealViewer',
        name: '/dealViewer',
        component: dealViewer,
      },
      {
         path: '/dealViewer/Digital',
        name: '/dealViewer/Digital',
        component: Digital,
      },
      {
         path: '/dealViewer/OOH',
        name: '/dealViewer/OOH',
        component: OOH,
      },
      {
         path: '/dealViewer/TV',
        name: '/dealViewer/TV',
        component: TV,
      },
      {
        path: '/dealViewer/Radio',
        name: '/dealViewer/Radio',
        component: Radio,
      },
      {
         path: '/dealViewer/Magazine',
        name: '/dealViewer/Magazine',
        component: Magazine,
      },
      {
        path: '/dealViewer/Newspaper',
        name: '/dealViewer/Newspaper',
        component: Newspaper,
      },{
        path: '/ASReport',
        name: '/ASReport',
        component: ASReport,
        children:[
            { path: '/ASReport/offline/marketReport', component: marketReport},
            { path: '/ASReport/offline/budgetSummary', component: budgetSummary},
            { path: '/ASReport/offline/TVSummary', component: TVSummary},
            { path: '/ASReport/offline/TVCost', component: TVCost},
            { path: '/ASReport/offline/PrintSummary', component: PrintSummary},
            { path: '/ASReport/offline/OtherSummary', component: OtherSummary},
            { path: '/ASReport/online/marketReport', component: OnmarketReport},
            { path: '/ASReport/online/budgetSummary', component: OnbudgetSummary},
            { path: '/ASReport/online/TVSummary', component: OnTVSummary},
            { path: '/ASReport/online/OnlineSummary', component: OnlineSummary},
        ]
      }, 
      {
        path: '/Market',
        name: '/Market',
        component: Market
      }, 
      {
        path: '/Settings',
        name: '/Settings',
        component: Settings
      }

    ]
  }]
})
