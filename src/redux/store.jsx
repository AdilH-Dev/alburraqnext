import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from '../redux/home/HomeSlice'
import TalentShowCaseReducer from '../redux/talentshowcase/TalentShowCaseSlice'
import TalentShowCaseDetailReducer from '../redux/talentshowcase/TalentShowCaseDetailSlice'
import ServicesReducer from '../redux/services/ServicesSlice'
import ServicesDetailReducer from '../redux/services/ServicesDetailSlice'
import PortfolioReducer from '../redux/portfolio/PortfolioSlics'
import PodcastReducer from '../redux/podcast/PodcastSlics'
import PodcastDetailReducer from '../redux/podcast/PodcastDetailSlice'
import PortfolioDetailReducer from '../redux/portfolio/PortfolioDetailSlice'
import NewsletterReducer from '../redux/newsletter/NewsletterSlice'
import ContactUsReducer from '../redux/contactus/ContactUsSlice'


export const store = configureStore({
  reducer: {
    home:HomeReducer,
    talentshowcase:TalentShowCaseReducer,
    talentShowCaseDetail:TalentShowCaseDetailReducer,
    services:ServicesReducer,
    servicesDetail:ServicesDetailReducer,
    portfolio: PortfolioReducer,
    portfolioDetail:PortfolioDetailReducer,
    contactus: ContactUsReducer,
    newsletter: NewsletterReducer,
    podcast: PodcastReducer,
    podcastDetail: PodcastDetailReducer,

  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),

})
