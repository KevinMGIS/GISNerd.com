// Global type declarations
type GtagCommand = 'config' | 'event' | 'js'
type GtagConfigArgs = [GtagCommand, string, Record<string, unknown>?] | [GtagCommand, Date]
type GtagEventArgs = [GtagCommand, string, Record<string, unknown>?]
interface Window {
  gtag?: (...args: (string | Date | Record<string, unknown>)[]) => void
}
