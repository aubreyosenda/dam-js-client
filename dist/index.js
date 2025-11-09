import { DAMClient } from './DAMClient.js';
import * as errors from './errors.js';

// Export everything
export { DAMClient, errors };

// Default export
export default DAMClient;

// Browser global (for script tag usage)
if (typeof window !== 'undefined') {
  window.DAMClient = DAMClient;
  window.DAMErrors = errors;
}