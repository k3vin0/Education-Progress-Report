export enum DisabilityCodes {
  INTELLECTUAL_DISABILITY = "01",
  HEARING_IMPAIRMENT = "02",
  DEAFNESS = "03",
  SPEECH_LANGUAGE_IMPAIRMENT = "04",
  VISUAL_IMPAIRMENT = "05",
  EMOTIONAL_DISTURBANCE = "06",
  ORTHOPEDIC_IMPAIRMENT = "07",
  OTHER_HEALTH_IMPAIRMENT = "08",
  SPECIFIC_LEARNING_DISABILITY = "09",
  MULTIPLE_DISABILITIES = "10",
  DEAF_BLINDNESS = "12",
  TRAUMATIC_BRAIN_INJURY = "13",
  AUTISM = "14",
  DEVELOPMENTAL_DELAY = "15",
}

export type ProviderData = {
  providerId: string;
  uid: string;
  displayName: string;
  email: string;
  phoneNumber: string | null;
  photoURL: string;
};

export type StsTokenManager = {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
};

export type UserInformation = {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  isAnonymous: boolean;
  photoURL: string;
  providerData: ProviderData[];
  stsTokenManager: StsTokenManager;
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
};
