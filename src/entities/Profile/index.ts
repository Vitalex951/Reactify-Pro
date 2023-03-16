import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { ProfileSchema, Profile } from './model/types/profile';
import { profileActions, profileReducer } from './model/slice/profileSLice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export {
    Profile,
    ProfileSchema,
    profileReducer,
    profileActions,
    fetchProfileData,
    ProfileCard,
};
