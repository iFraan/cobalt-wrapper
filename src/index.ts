import axios from 'axios';
import { DownloadOptions, MainResponse } from './types/internal';

const DEFAULTS = {
    base_url: 'http://api.cobalt.tools',
    url: null,
    vCodec: 'h264',
    vQuality: '720',
    aFormat: 'mp3',
    filenamePattern: 'classic',
    isAudioOnly: false,
    isTTFullAudio: false,
    isAudioMuted: false,
    dubLang: false,
    disableMetadata: false,
    twitterGif: false,
    tiktokH265: false
} as const;

export { }

export const download = async (options: DownloadOptions): Promise<MainResponse> => {

    const parameters = {
        ...DEFAULTS,
        ...options,
    };

    const body = { ...parameters, base_url: null };

    type AxiosReponse = { data: MainResponse };

    const { data } = (await axios.post(parameters.base_url, body)) as AxiosReponse;

    return data;
}