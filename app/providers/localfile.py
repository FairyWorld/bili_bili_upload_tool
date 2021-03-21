import os
from . import DownloadResult
__desc__ = '本地文件'
__cfg_help__ = '''cover - 封面图片路径'''
options={
    'cover':''
}

def update_config(opt):
    global options
    options = {**options,**opt}

def download_video(res) -> DownloadResult:
    results = DownloadResult()
    if not os.path.isfile(res) or (options['cover'] and not os.path.isfile(options['cover'])):
        raise FileNotFoundError
    with DownloadResult() as result:        
        result.video_path = res
        result.cover_path = options['cover']            
        result.original = True                
    results.results.append(result)
    return results