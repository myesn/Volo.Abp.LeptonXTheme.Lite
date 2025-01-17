﻿using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.LeptonXLiteTheme;

[DependsOn(
    typeof(AbpVirtualFileSystemModule)
)]
public class AbpLeptonXLiteThemeInstallerModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<AbpLeptonXLiteThemeInstallerModule>();
        });
    }
}