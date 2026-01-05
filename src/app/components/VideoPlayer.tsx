import { Dialog, DialogContent } from './ui/dialog';
import { X } from 'lucide-react';

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
            <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 bg-slate-900 border-amber-500/30 [&>button]:hidden overflow-y-auto">
                <div className="relative p-4 sm:p-6">
                    {/* 标题栏和关闭按钮 */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                        {title && (
                            <h3 className="text-lg sm:text-xl font-semibold text-white pr-2 truncate">{title}</h3>
                        )}
                        <button
                            onClick={onClose}
                            className="ml-auto p-2 rounded-md hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 z-10 flex-shrink-0"
                            aria-label="关闭视频"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-amber-400 transition-colors" />
                        </button>
                    </div>
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

