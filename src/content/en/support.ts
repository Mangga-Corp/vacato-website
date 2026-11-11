import type { SupportContent } from '../types'

export const support = {
  title: 'Support',
  intro:
    'Have a question, found a bug, or got an idea? Here’s how to reach us, plus answers to the most common questions.',
  contact: {
    heading: 'Contact us',
    emailLabel: 'Email',
    emailPending: 'Our support email address is coming soon.',
    responseTime: 'We usually reply within 2 to 3 business days.',
  },
  actions: {
    pendingNote: 'Available once the support email address is published.',
    bug: {
      title: 'Report a bug',
      description:
        'Something not working? Send us a message. The email opens with a template that helps us find the problem faster.',
      button: 'Report a bug',
    },
    feature: {
      title: 'Request a feature',
      description: 'Have an idea that would make Vacato better? We’d love to hear it.',
      button: 'Request a feature',
    },
  },
  mailto: {
    bug: {
      subject: 'Vacato bug report',
      intro: 'Hi, I’d like to report a problem with Vacato.',
      appVersionLabel: 'App version',
      deviceLabel: 'iPhone model',
      osLabel: 'iOS version',
      descriptionLabel: 'What went wrong',
      stepsLabel: 'Steps to reproduce',
    },
    feature: {
      subject: 'Vacato feature request',
      intro: 'Hi, I have an idea for Vacato.',
      appVersionLabel: 'App version',
      ideaLabel: 'My idea',
      reasonLabel: 'Why it would help',
    },
  },
  faq: {
    heading: 'Frequently asked questions',
    intro:
      'Quick answers to the things people ask most. Can’t find yours? Use the contact options above.',
    items: [
      {
        question: 'Do I need an internet connection?',
        answer:
          'No. Studying your photos and guiding the camera both happen on your iPhone. The internet is only used if a photo you pick is stored in iCloud and has to be downloaded first.',
      },
      {
        question: 'Are my photos uploaded anywhere?',
        answer:
          'No. Vacato has no server and never uploads your photos. They are analyzed on your iPhone and stay there.',
      },
      {
        question: 'What does Vacato store on my iPhone?',
        answer:
          'A reduced-size copy of the reference photos you choose, and what Vacato learned from them (such as shot size and camera angle). The photos you take are saved to your Photos library, and Vacato keeps a small list so its gallery can show them. Vacato has no accounts.',
      },
      {
        question: 'How do I delete my data?',
        answer:
          'To remove a style and its reference photos, open the “…” menu on its card and choose Delete. To delete photos you took, delete them from the Vacato gallery, which also removes them from Photos. Deleting the app removes everything Vacato stored on your iPhone, but photos already saved in Photos stay until you delete them there.',
      },
      {
        question: 'How do I turn camera access back on?',
        answer:
          'Open the Settings app, find Vacato, and turn on Camera. You can also tap “Open Settings” on the “Camera Access Needed” screen.',
      },
      {
        question: 'How do I turn photo access back on?',
        answer:
          'Open Settings, find Vacato, tap Photos, and allow access. Vacato needs it to choose reference photos and to save the photos you take. If you gave access to selected photos only, tap “Add more” in the photo picker to include others.',
      },
      {
        question: 'Does Vacato use my location?',
        answer: 'No. This version of Vacato does not ask for or use your location.',
      },
      {
        question: 'Does Vacato give lighting advice?',
        answer:
          'Not in this version. The guidance covers distance, phone height, and tilt, which are the things that change how a photo of you is framed.',
      },
      {
        question: 'I don’t see “Take the photo now”. Can I still take a photo?',
        answer:
          'Yes, the shutter always works. The green message appears when distance, height, and tilt all match your style. If it doesn’t appear, make sure the person is in view, follow the instruction on screen, and hold the phone steady for a moment.',
      },
      {
        question: 'There are several people in view. Who does Vacato guide?',
        answer:
          'One person at a time. When more than one person is in view, tap the person you want to photograph. The others are dimmed.',
      },
      {
        question: 'How many photos do I need to create a style?',
        answer:
          'At least 3 and up to 50. Choose photos that clearly show you. Photos where no person can be found can’t be used.',
      },
      {
        question: 'Can I edit the photos I take?',
        answer:
          'Yes. Open a photo in the gallery and tap Edit to try five looks or adjust it with sliders. Saving creates a new photo, and the original is never changed.',
      },
      {
        question: 'Do I need an account?',
        answer: 'No. There is nothing to sign up for or log in to.',
      },
      {
        question: 'Does Vacato speak its instructions out loud?',
        answer:
          'Not at the moment. Instructions appear as short text with animations and haptic feedback.',
      },
    ],
  },
  troubleshooting: {
    heading: 'Troubleshooting',
    intro: 'Most issues can be fixed with a few quick checks.',
    generalHeading: 'Try these first',
    generalSteps: [
      'Close Vacato completely and open it again.',
      'Make sure your iPhone is updated to the latest iOS.',
      'In Settings, check that Vacato is allowed to use the Camera and Photos.',
      'Check that your iPhone has enough free storage.',
    ],
    specificHeading: 'Specific issues',
    specificItems: [
      {
        problem: '“We couldn’t find a person in these photos.”',
        solution:
          'Choose other photos in which you are clearly visible, then try again. Tap “Choose Other Photos” to pick new ones.',
      },
      {
        problem: '“We couldn’t finish your photo analysis.”',
        solution:
          'Tap “Try again”. If it keeps happening, close and reopen Vacato. The analysis starts over.',
      },
      {
        problem: 'A style can’t be used and says to edit its photos',
        solution:
          'Open the “…” menu on the style card and choose Edit Photos. Add photos that show a person clearly, and Vacato will study them again.',
      },
      {
        problem: '“Camera Access Needed”',
        solution:
          'Tap “Open Settings” and turn on Camera for Vacato. Return to the app and the camera will start.',
      },
      {
        problem: '“Camera Not Available”',
        solution:
          'The camera may be restricted on this iPhone, for example by Screen Time. Check Settings > Screen Time > Content & Privacy Restrictions.',
      },
      {
        problem: '“Photo Access Needed”, or a photo didn’t save',
        solution:
          'Vacato can’t save to your library without photo access. Allow it in Settings and take the photo again.',
      },
      {
        problem: '“Point back at the person”',
        solution:
          'Vacato lost sight of the person for a moment. Aim the camera back at them and the guidance continues.',
      },
      {
        problem: '“Couldn’t save the preference and its photos”',
        solution: 'Your iPhone may be low on storage. Free up some space and try again.',
      },
    ],
  },
  requirements: {
    heading: 'Requirements',
    items: [
      { icon: 'smartphone', label: 'iOS', value: 'iOS 26.0 or later' },
      {
        icon: 'tablet-smartphone',
        label: 'Devices',
        value: 'iPhone and iPad (iPhone in portrait orientation)',
      },
      { icon: 'camera', label: 'Camera', value: 'Required, to guide and take photos' },
      {
        icon: 'images',
        label: 'Photos',
        value: 'Required, to choose reference photos and save your photos',
      },
      { icon: 'map-pin', label: 'Location', value: 'Not used' },
      {
        icon: 'wifi',
        label: 'Internet',
        value: 'Not required (only used to download photos stored in iCloud)',
      },
      { icon: 'languages', label: 'Language', value: 'The app is currently in English' },
    ],
  },
  version: {
    label: 'Latest version',
  },
} satisfies SupportContent
