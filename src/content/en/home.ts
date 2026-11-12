import type { HomeContent } from '../types'

export const home = {
  hero: {
    headline: 'Get photographed your way.',
    subheadline:
      'Choose a few photos you love. Poto learns your style on your iPhone, then guides whoever holds the camera, one simple step at a time.',
    screenshotAlt:
      'The Poto camera showing a single instruction that helps the photographer frame the shot.',
  },
  features: {
    eyebrow: 'Features',
    heading: 'Built for the moment you hand over your phone',
    intro:
      'Friends and strangers rarely shoot the way you’d like. Poto tells them exactly what to adjust.',
    items: [
      {
        icon: 'images',
        title: 'Learns from your favorite photos',
        description:
          'Pick 3 to 50 photos of yourself that you love. Poto studies how close, how high, and how tilted they were shot.',
      },
      {
        icon: 'navigation',
        title: 'One instruction at a time',
        description:
          'Move closer, raise the phone, tilt down. The photographer follows one clear cue at a time, with a small animation and a tap of haptics.',
      },
      {
        icon: 'circle-check',
        title: 'Tells you when it’s right',
        description:
          'When distance, height, and tilt all match, the camera says “Take the photo now”. Your shot is saved to Photos, framed like your references.',
      },
      {
        icon: 'armchair',
        title: 'Standing or sitting',
        description:
          'Poto notices when you sit down and switches to a full-body shot. You can also choose Full body, 3/4, or Half body yourself.',
      },
      {
        icon: 'sliders',
        title: 'No photos? Set it by hand',
        description:
          'Create a custom style without any photos. Choose where you appear in the frame, and whether the camera is at eye level, low, or high.',
      },
      {
        icon: 'wand',
        title: 'Gallery and light touch-ups',
        description:
          'See your Poto photos in one place. Try five looks or fine-tune with sliders. Edits are saved as a new photo, so the original stays untouched.',
      },
    ],
  },
  how: {
    eyebrow: 'How it works',
    heading: 'Three steps to a photo you actually like',
    steps: [
      {
        title: 'Choose your favorite photos',
        description:
          'Pick at least three photos of yourself and give your style a name. Poto reads them on your iPhone and shows you a style card.',
      },
      {
        title: 'Hand over your phone',
        description:
          'Pick your style, open the camera, and give your phone to a friend or a stranger. If several people are in view, they tap the one to photograph.',
      },
      {
        title: 'Follow the cues, tap the shutter',
        description:
          'Move closer or back, raise or lower the phone, tilt it. When the camera says it’s right, take the photo.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacy',
    heading: 'Your photos stay on your iPhone.',
    body: 'Poto studies your photos right on your device. They are never uploaded, and there is nothing to sign up for.',
    points: [
      'Photos are analyzed on your iPhone, not on a server',
      'No account or sign-up',
      'No analytics and no tracking',
      'Only asks for camera and photo access',
    ],
    link: 'Read the privacy policy',
  },
  finalCta: {
    heading: 'Let anyone take your photo your way.',
    body: 'Poto is made for trips, outings, and every time you ask someone to take your picture.',
  },
} satisfies HomeContent
