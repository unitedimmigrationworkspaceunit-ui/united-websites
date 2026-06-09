/** Unsplash portraits — Indian / South Asian clients for testimonials & hero */

export const face = (photoId: string, size = 400) =>
  `https://images.unsplash.com/${photoId}?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&w=${size}&q=80`;

const photo = (photoId: string, size = 1080) =>
  `https://images.unsplash.com/${photoId}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=${size}&q=80`;

export const portraitIds = {
  womanProfessional: 'photo-1590650153855-d9e808231d41',
  womanPortrait: 'photo-1573496359142-b8d87734a5a2',
  womanStudent: 'photo-1524504388940-b1c1722653e1',
  manProfessional: 'photo-1560250097-0b93528c311a',
  manYoung: 'photo-1607746882042-944635dfe10e',
  manCasual: 'photo-1507003211169-0a1dd7228f2d',
  womanSmiling: 'photo-1580489944761-15a19d654956',
} as const;

export const indianPortraits = Object.fromEntries(
  Object.entries(portraitIds).map(([key, id]) => [key, face(id)])
) as Record<keyof typeof portraitIds, string>;

export const indianHero = {
  main: photo('photo-1659352790654-058e9077a4f4'),
  clientAvatars: [
    face(portraitIds.womanPortrait, 100),
    face(portraitIds.manProfessional, 100),
    face(portraitIds.womanSmiling, 100),
    face(portraitIds.manCasual, 100),
    face(portraitIds.manYoung, 100),
  ],
};
