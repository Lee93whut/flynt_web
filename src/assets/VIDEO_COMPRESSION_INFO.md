# 视频压缩信息

## 压缩结果

- **原始文件大小**: 3.8MB
- **压缩后大小**: 553KB
- **压缩率**: 约 85% 减少
- **原始分辨率**: 1280x704
- **压缩后分辨率**: 960x528（保持宽高比）
- **原始码率**: 3081 kb/s
- **压缩后码率**: ~312 kb/s

## 压缩参数

使用的 ffmpeg 命令：
```bash
ffmpeg -i video.mp4 \
  -vcodec libx264 \
  -preset slow \
  -crf 28 \
  -vf "scale=960:-2" \
  -acodec aac \
  -b:a 128k \
  -movflags +faststart \
  video_compressed.mp4
```

### 参数说明

- `-vcodec libx264`: 使用 H.264 编码器（兼容性最好）
- `-preset slow`: 使用慢速预设（更好的压缩率）
- `-crf 28`: 恒定质量因子 28（平衡质量和文件大小）
- `-vf "scale=960:-2"`: 将宽度缩放到 960px，高度自动计算保持宽高比
- `-acodec aac`: 音频使用 AAC 编码
- `-b:a 128k`: 音频码率 128kbps
- `-movflags +faststart`: 优化网络播放（将元数据移到文件开头）

## 性能影响

- **加载时间减少**: 从 3.8MB 降到 553KB，加载时间减少约 85%
- **带宽节省**: 对于 1000 个访问者，可节省约 3.2GB 带宽
- **用户体验**: 视频可以更快开始播放，减少等待时间

## 备份文件

原始视频已备份为 `video.mp4.backup`，如需恢复可以使用：
```bash
mv src/assets/video.mp4.backup src/assets/video.mp4
```

## 进一步优化建议

如果还需要更小的文件：
1. 降低分辨率到 854x480 或 640x360
2. 降低 CRF 值到 30-32（质量会稍降）
3. 降低帧率到 24fps（如果原视频是 30fps）
4. 使用 WebM 格式（VP9 编码，文件更小但兼容性稍差）

