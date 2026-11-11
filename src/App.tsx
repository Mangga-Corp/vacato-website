import { Route, Routes } from 'react-router-dom'
import { LocaleLayout } from './components/layout/LocaleLayout'
import { useScrollManager } from './hooks/useScrollManager'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { SupportPage } from './pages/SupportPage'

export function App() {
  useScrollManager()

  return (
    <Routes>
      <Route element={<LocaleLayout key="en" locale="en" />}>
        <Route index element={<HomePage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="id" element={<LocaleLayout key="id" locale="id" />}>
        <Route index element={<HomePage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
