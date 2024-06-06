export type DownloadOptions = {
    base_url?: string; // URL to execute the request
    url: string; // URL encoded as URI. Must be included in every request.
    vCodec?: 'h264' | 'av1' | 'vp9'; // Applies only to YouTube downloads. 'h264' is recommended for phones. Default is 'h264'.
    vQuality?: '144' | '240' | '360' | '480' | '720' | '1080' | '1440' | '2160' | 'max'; // Default is '720'. '720' quality is recommended for phones.
    aFormat?: 'best' | 'mp3' | 'ogg' | 'wav' | 'opus'; // Default is 'mp3'.
    filenamePattern?: 'classic' | 'pretty' | 'basic' | 'nerdy'; // Changes the way files are named. Previews can be seen in the web app. Default is 'classic'.
    isAudioOnly?: boolean; // Default is false.
    isTTFullAudio?: boolean; // Enables download of original sound used in a TikTok video. Default is false.
    isAudioMuted?: boolean; // Disables audio track in video downloads. Default is false.
    dubLang?: boolean; // Backend uses Accept-Language header for YouTube video audio tracks when true. Default is false.
    disableMetadata?: boolean; // Disables file metadata when set to true. Default is false.
    twitterGif?: boolean; // Changes whether Twitter GIFs are converted to .gif. Default is false.
    tiktokH265?: boolean; // Changes whether 1080p H265 videos are preferred or not. Default is false.
}

type PickerItem = {
    type?: 'video'; // Used only if `pickerType` is `various`.
    url: string; // Direct link to a file or a link to Cobalt's live render.
    thumb?: string; // Item thumbnail that's displayed in the picker. Used only for `video` type.
}

export type MainResponse = {
    status: 'error' | 'redirect' | 'stream' | 'success' | 'rate-limit' | 'picker';
    text: string; // Various text, mostly used for errors.
    url: string; // Direct link to a file or a link to Cobalt's live render.
    pickerType?: 'various' | 'images'; // Type of picker.
    picker?: PickerItem[]; // Array of picker items.
    audio?: string; // Direct link to a file or a link to Cobalt's live render.
}
