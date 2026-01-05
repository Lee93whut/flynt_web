import { Dialog, DialogContent } from './ui/dialog';

/**
 * 视频播放器组件
 * 用于播放本地 MP4 视频文件
 * 
 * @param videoSrc - 视频文件路径（通过 import 导入）
 * @param isOpen - 对话框是否打开
 * @param onClose - 关闭回调
 * @param title - 视频标题（可选）
 */
interface VideoPlayerProps {
    videoSrc: string;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

export function VideoPlayer({ videoSrc, isOpen, onClose, title }: VideoPlayerProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl w-full p-0 bg-slate-900 border-amber-500/30">
                <div className="relative p-6">
                    {title && (
                        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
                    )}
                    <div className="relative">
                        <video
                            src={videoSrc}
                            controls
                            autoPlay
                            className="w-full aspect-video rounded-lg"
                            preload="metadata"
                        >
                            您的浏览器不支持视频播放。
                        </video>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

