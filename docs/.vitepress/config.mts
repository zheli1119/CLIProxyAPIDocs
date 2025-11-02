import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "CLIProxyAPI",
    description: "Wrap Gemini CLI, ChatGPT Codex, Claude Code, Qwen Code, iFlow as an OpenAI/Gemini/Claude/Codex compatible API service, allowing you to enjoy the free Gemini 2.5 Pro, GPT 5, Claude, Qwen model through API",
    rewrites: {
        'en/:rest*': ':rest*'
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/en/'},
            {text: 'Quick Start', link: '/en/introduction/quick-start'}
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    {text: 'What is CLIProxyAPI?', link: '/en/introduction/what-is-cliproxyapi'},
                    {text: 'Quick Start', link: '/en/introduction/quick-start'},
                    {text: 'GitHub', link: 'https://github.com/router-for-me/CLIProxyAPI'}
                ]
            },
            {
                text: 'Configuration',
                items: [
                    {text: 'Basic Configuration', link: '/en/configuration/basic'},
                    {text: 'Configuration Options', link: '/en/configuration/options'},
                    {text: 'Authentication Directory', link: '/en/configuration/auth-dir'},
                    {text: 'Hot Reloading', link: '/en/configuration/hot-reloading'},
                    {
                        text: 'Storage',
                        items:[
                            {text: 'Git Storage', link: '/en/configuration/storage/git'},
                            {text: 'PostgreSQL Storage', link: '/en/configuration/storage/pgsql'},
                            {text: 'Object Storage', link: '/en/configuration/storage/s3'},
                        ]
                    },
                    {
                        text: 'Providers',
                        items:[
                            {text: 'Gemini CLI', link: '/en/configuration/provider/gemini-cli'},
                            {text: 'Claude Code', link: '/en/configuration/provider/claude-code'},
                            {text: 'Codex', link: '/en/configuration/provider/codex'},
                            {text: 'Qwen Code', link: '/en/configuration/provider/qwen-code'},
                            {text: 'iFlow', link: '/en/configuration/provider/iflow'},
                            {text: 'AI Studio', link: '/en/configuration/provider/ai-studio'},
                            {text: 'OpenAI Compatibility', link: '/en/configuration/provider/openai-compatibility'},
                            {text: 'Claude Code Compatibility', link: '/en/configuration/provider/claude-code-compatibility'},
                            {text: 'Gemini Compatibility', link: '/en/configuration/provider/gemini-compatibility'},
                            {text: 'Codex Compatibility', link: '/en/configuration/provider/codex-compatibility'},
                        ]
                    },
                ]
            },
            {
                text: 'Management',
                items: [
                    {text: 'Web UI', link: '/en/management/webui'},
                    {text: 'Desktop GUI', link: '/en/management/gui'},
                ]
            },
            {
                text: 'Agent Client Configuration',
                items: [
                    {text: 'Claude Code', link: '/en/agent-client/claude-code'},
                    {text: 'Codex', link: '/en/agent-client/codex'},
                    {text: 'Gemini CLI', link: '/en/agent-client/gemini-cli'},
                    {text: 'Factory Droid', link: '/en/agent-client/droid'}
                ]
            },
            {
                text: 'Docker',
                items: [
                    {text: 'Run with Docker', link: '/en/docker/docker'},
                    {text: 'Run with Docker Compose', link: '/en/docker/docker-compose'},
                ]
            },

        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/router-for-me/CLIProxyAPI'}
        ],


        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present Router-For.ME'
        },
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en-US',
            link: '/en'
        },
        cn: {
            label: '简体中文',
            lang: 'zh-Hans',
            link: '/cn'
        }
    }
})