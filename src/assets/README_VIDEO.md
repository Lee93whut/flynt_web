# 视频文件说明

## 如何添加视频

1. 将您的 MP4 视频文件放在此目录下（`src/assets/`）
2. 将视频文件重命名为 `video.mp4`
3. 如果您的视频文件名不同，请在 `src/app/components/Hero.tsx` 中修改导入路径：

```typescript
// 如果您的视频文件名是 my-video.mp4
import videoFile from '../assets/my-video.mp4';
```

## 支持的视频格式

- MP4（推荐）
- WebM
- OGG

## 注意事项

- 视频文件会被包含在构建产物中，文件大小会影响页面加载速度
- 建议压缩视频文件以优化性能
- 视频文件路径使用相对路径，通过 Vite 自动处理

