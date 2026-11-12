import type { PrivacyContent } from '../types'

// TODO: review legal
export const privacy = {
  title: 'Privacy Policy',
  intro:
    'This policy explains what Poto does with your information. The short version: your photos are analyzed on your iPhone and are not sent to us or anyone else.',
  tocLabel: 'On this page',
  highlights: [
    {
      icon: 'smartphone',
      title: 'On your iPhone',
      description: 'Photos are analyzed on your device and never uploaded.',
    },
    {
      icon: 'user',
      title: 'No account',
      description: 'Nothing to sign up for, and no personal data collected.',
    },
    {
      icon: 'shield-check',
      title: 'No tracking',
      description: 'No ads, no analytics, no third-party trackers.',
    },
  ],
  lastUpdatedLabel: 'Last updated',
  sections: [
    {
      title: 'Summary',
      icon: 'shield-check',
      paragraphs: [
        'Poto does not have accounts, servers, advertising, analytics, or tracking. We do not collect your personal data. Everything the app learns from your photos stays on your device.',
      ],
    },
    {
      title: 'Who we are',
      icon: 'user',
      paragraphs: [
        'Poto is developed by the Poto team. In this policy, “we” and “us” refer to Poto. You can reach us through the Contact section below.',
      ],
    },
    {
      title: 'What Poto accesses',
      icon: 'key-round',
      paragraphs: ['Poto only asks for what it needs, when it needs it.'],
      list: [
        'Photos you choose: the photos you pick as references, so Poto can learn your style. A reduced-size copy is saved inside the app.',
        'Camera: used live to see the scene, find the person to photograph, and give guidance. Camera images are not recorded or uploaded.',
        'Photos library: used to read the reference photos you choose, to save the photos you take, to show them in the Poto gallery, and to delete them if you ask.',
        'Motion sensors: used live to measure how your phone is tilted. This information is not stored.',
        'Location: not requested and not used.',
      ],
    },
    {
      title: 'How we use this information',
      icon: 'target',
      paragraphs: [
        'Your reference photos are analyzed to work out your preferred shot size, where you appear in the frame, camera height and tilt, posture, and similar traits. This is used only to guide the camera when someone takes your photo, and to show your style card. We do not use it for any other purpose.',
      ],
    },
    {
      title: 'Where your data is processed',
      icon: 'smartphone',
      paragraphs: [
        'All analysis and camera guidance run on your iPhone. Poto does not send your photos, the results of the analysis, or your camera images to any server.',
        'If a photo you choose is stored in iCloud Photos and is not on your iPhone yet, iOS may download it from iCloud so Poto can use it. This is handled by Apple’s Photos system on your device.',
      ],
    },
    {
      title: 'Third parties',
      icon: 'users',
      paragraphs: [
        'Poto does not include advertising, analytics, crash reporting, or tracking tools, and does not share your information with third parties. Poto does not have a backend that we operate.',
      ],
    },
    {
      title: 'How long data is kept',
      icon: 'clock',
      paragraphs: [
        'Reference photos and what Poto learned from them stay on your iPhone until you delete the style or delete the app. Photos you take stay in your Photos library until you delete them. Poto’s gallery keeps a small list of which photos came from the app, and updates it when photos are removed.',
      ],
    },
    {
      title: 'Deleting your data',
      icon: 'trash',
      paragraphs: ['You are in control of your data at all times:'],
      list: [
        'To delete a style and its reference photos, open the “…” menu on the style card and choose Delete.',
        'To delete a photo you took, delete it in the Poto gallery. It is also removed from your Photos library.',
        'To remove everything Poto stored on your iPhone, delete the app. Photos already saved in your Photos library stay there until you delete them.',
      ],
    },
    {
      title: 'Your rights',
      icon: 'scale',
      paragraphs: [
        'Because we do not collect or store your personal data on our servers, there is nothing for us to hold, export, or erase on your behalf. You can view and delete everything yourself on your device. If you have a question or request about your privacy, contact us and we will gladly help.',
      ],
    },
    {
      title: 'Changes to this policy',
      icon: 'refresh',
      paragraphs: [
        'If we change how Poto handles data, we will update this page and the “Last updated” date.',
      ],
    },
    {
      title: 'Contact',
      icon: 'mail',
      paragraphs: [
        'For privacy questions, please use the contact details on the Support page of this website.',
      ],
    },
  ],
} satisfies PrivacyContent
