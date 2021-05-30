import * as React from "react";

function SvgExplore(props) {
  return (
    <svg
      width={472}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.5}
        d="M12.634 13.479h-8.76v6.562h10.24V23H.167V1.672h13.843V4.66H3.874v5.889h8.76v2.93zm9.843-1.114l3.018-5.215h3.955l-4.848 7.808L29.612 23h-3.926l-3.165-5.42L19.372 23h-3.955l5.01-8.042-4.834-7.808h3.926l2.959 5.215zm23.277 2.871c0 2.451-.557 4.41-1.67 5.874-1.113 1.455-2.607 2.183-4.482 2.183-1.739 0-3.13-.571-4.175-1.714v7.515h-3.56V7.15h3.281l.147 1.612c1.045-1.27 2.466-1.905 4.263-1.905 1.933 0 3.447.723 4.54 2.168 1.104 1.436 1.656 3.433 1.656 5.992v.22zm-3.545-.307c0-1.582-.317-2.837-.952-3.765-.625-.928-1.524-1.392-2.695-1.392-1.456 0-2.5.601-3.135 1.802v7.031c.644 1.23 1.699 1.846 3.164 1.846 1.133 0 2.016-.454 2.651-1.362.645-.918.967-2.305.967-4.16zM52.565 23h-3.56V.5h3.56V23zm3.223-8.071c0-1.553.308-2.95.923-4.19.615-1.25 1.48-2.207 2.593-2.87 1.113-.675 2.392-1.012 3.838-1.012 2.138 0 3.872.689 5.2 2.066 1.338 1.377 2.06 3.203 2.168 5.478l.014.835c0 1.563-.302 2.96-.908 4.19-.596 1.23-1.455 2.182-2.578 2.856-1.113.674-2.402 1.011-3.867 1.011-2.236 0-4.028-.742-5.376-2.227-1.338-1.494-2.007-3.481-2.007-5.961v-.176zm3.56.307c0 1.631.337 2.91 1.01 3.838.674.918 1.612 1.377 2.813 1.377s2.134-.469 2.798-1.406c.674-.938 1.01-2.31 1.01-4.116 0-1.602-.346-2.871-1.04-3.809-.683-.937-1.616-1.406-2.797-1.406-1.163 0-2.085.464-2.769 1.391-.683.918-1.025 2.295-1.025 4.131zm22.485-4.834a8.81 8.81 0 00-1.45-.117c-1.631 0-2.73.625-3.296 1.875V23h-3.56V7.15h3.399l.088 1.773c.859-1.377 2.05-2.066 3.574-2.066.508 0 .928.069 1.26.205l-.015 3.34zm8.936 12.891c-2.256 0-4.087-.708-5.494-2.124-1.396-1.426-2.094-3.32-2.094-5.684v-.44c0-1.581.302-2.992.908-4.232.615-1.25 1.475-2.222 2.578-2.916 1.103-.693 2.334-1.04 3.691-1.04 2.159 0 3.824.689 4.995 2.066 1.182 1.377 1.773 3.325 1.773 5.845v1.435H86.769c.108 1.309.542 2.344 1.304 3.106.772.761 1.739 1.142 2.9 1.142 1.632 0 2.96-.659 3.985-1.977l1.919 1.83c-.635.948-1.484 1.685-2.549 2.213-1.055.517-2.241.776-3.56.776zm-.425-13.58c-.977 0-1.768.343-2.373 1.026-.596.684-.977 1.636-1.143 2.857h6.782v-.264c-.078-1.191-.395-2.09-.952-2.695-.556-.616-1.328-.923-2.314-.923zm30.952 8.38l2.519-10.943h3.472L122.966 23h-2.93l-3.398-10.884L113.298 23h-2.93l-4.336-15.85h3.472l2.563 10.826 3.252-10.826H118l3.296 10.943zm11.88-9.214c1.162-1.348 2.632-2.022 4.409-2.022 3.379 0 5.093 1.93 5.142 5.787V23h-3.56V12.775c0-1.093-.239-1.865-.718-2.314-.469-.459-1.162-.689-2.08-.689-1.426 0-2.49.635-3.193 1.905V23h-3.56V.5h3.56v8.379zm18.706 9.023l3.222-10.752h3.794L152.6 25.402c-.967 2.666-2.608 4-4.922 4-.518 0-1.089-.088-1.714-.264v-2.754l.674.044c.898 0 1.572-.166 2.021-.498.459-.323.82-.87 1.084-1.64l.513-1.363-5.567-15.777h3.838l3.355 10.752zm23.056 2.55c.889 0 1.626-.26 2.212-.777.586-.518.899-1.157.938-1.92h3.354c-.039.987-.346 1.91-.922 2.77-.577.849-1.358 1.523-2.344 2.02a6.989 6.989 0 01-3.194.748c-2.216 0-3.974-.718-5.273-2.153-1.299-1.436-1.948-3.418-1.948-5.948v-.366c0-2.412.644-4.34 1.933-5.786 1.289-1.455 3.047-2.183 5.274-2.183 1.885 0 3.418.552 4.599 1.656 1.192 1.093 1.817 2.534 1.875 4.321h-3.354c-.039-.908-.352-1.655-.938-2.241-.576-.586-1.313-.88-2.212-.88-1.152 0-2.041.42-2.666 1.26-.625.83-.942 2.095-.952 3.795v.57c0 1.72.308 3.004.923 3.853.625.84 1.524 1.26 2.695 1.26zm17.491-10.05a8.811 8.811 0 00-1.45-.117c-1.631 0-2.73.625-3.296 1.875V23h-3.56V7.15h3.398l.088 1.773c.86-1.377 2.051-2.066 3.575-2.066.507 0 .927.069 1.259.205l-.014 3.34zm8.935 12.891c-2.256 0-4.087-.708-5.493-2.124-1.396-1.426-2.095-3.32-2.095-5.684v-.44c0-1.581.303-2.992.909-4.232.615-1.25 1.474-2.222 2.578-2.916 1.103-.693 2.334-1.04 3.691-1.04 2.158 0 3.823.689 4.995 2.066 1.182 1.377 1.773 3.325 1.773 5.845v1.435h-10.357c.108 1.309.542 2.344 1.304 3.106.771.761 1.738 1.142 2.9 1.142 1.631 0 2.959-.659 3.985-1.977l1.919 1.83c-.635.948-1.485 1.685-2.549 2.213-1.055.517-2.241.776-3.56.776zm-.425-13.58c-.976 0-1.767.343-2.373 1.026-.595.684-.976 1.636-1.142 2.857h6.782v-.264c-.078-1.191-.395-2.09-.952-2.695-.557-.616-1.328-.923-2.315-.923zM219.968 23c-.156-.303-.293-.796-.41-1.48-1.133 1.182-2.52 1.773-4.161 1.773-1.591 0-2.89-.454-3.896-1.362-1.006-.909-1.509-2.032-1.509-3.37 0-1.689.625-2.983 1.875-3.881 1.26-.909 3.057-1.363 5.391-1.363h2.182v-1.04c0-.82-.229-1.474-.688-1.962-.459-.499-1.157-.748-2.095-.748-.81 0-1.474.205-1.992.616-.518.4-.776.913-.776 1.538h-3.56c0-.87.288-1.68.864-2.432.577-.762 1.358-1.357 2.344-1.787.996-.43 2.105-.645 3.325-.645 1.856 0 3.335.47 4.439 1.407 1.103.927 1.67 2.236 1.699 3.926v7.148c0 1.426.2 2.563.601 3.413V23h-3.633zm-3.911-2.564c.703 0 1.362-.17 1.977-.512.625-.342 1.094-.801 1.406-1.377v-2.988h-1.919c-1.318 0-2.309.23-2.973.688-.664.46-.996 1.108-.996 1.948 0 .684.224 1.23.674 1.64.459.401 1.069.601 1.831.601zm15.131-17.138V7.15h2.798v2.637h-2.798v8.848c0 .605.118 1.045.352 1.318.244.264.674.396 1.289.396.41 0 .825-.05 1.245-.147v2.754a8.766 8.766 0 01-2.344.337c-2.734 0-4.101-1.509-4.101-4.526v-8.98h-2.608V7.15h2.608V3.298h3.559zm4.424 11.63c0-1.552.308-2.949.923-4.189.615-1.25 1.48-2.207 2.593-2.87 1.113-.675 2.393-1.012 3.838-1.012 2.138 0 3.872.689 5.2 2.066 1.338 1.377 2.061 3.203 2.168 5.478l.015.835c0 1.563-.303 2.96-.909 4.19-.595 1.23-1.455 2.182-2.578 2.856-1.113.674-2.402 1.011-3.867 1.011-2.236 0-4.028-.742-5.376-2.227-1.338-1.494-2.007-3.481-2.007-5.961v-.176zm3.56.308c0 1.631.337 2.91 1.011 3.838.673.918 1.611 1.377 2.812 1.377 1.201 0 2.134-.469 2.798-1.406.674-.938 1.011-2.31 1.011-4.116 0-1.602-.347-2.871-1.04-3.809-.684-.937-1.617-1.406-2.798-1.406-1.162 0-2.085.464-2.769 1.391-.683.918-1.025 2.295-1.025 4.131zm22.485-4.834a8.811 8.811 0 00-1.45-.117c-1.631 0-2.729.625-3.296 1.875V23h-3.559V7.15h3.398l.088 1.773c.859-1.377 2.051-2.066 3.574-2.066.508 0 .928.069 1.26.205l-.015 3.34zm11.133 8.291c0-.634-.264-1.118-.791-1.45-.518-.332-1.382-.625-2.593-.879s-2.221-.576-3.032-.966c-1.777-.86-2.666-2.105-2.666-3.736 0-1.367.576-2.51 1.729-3.428 1.152-.918 2.617-1.377 4.394-1.377 1.895 0 3.423.47 4.585 1.407 1.172.937 1.758 2.153 1.758 3.647h-3.56c0-.684-.254-1.25-.761-1.7-.508-.458-1.182-.688-2.022-.688-.781 0-1.421.181-1.919.542a1.715 1.715 0 00-.732 1.45c0 .547.229.972.688 1.275.459.303 1.387.61 2.783.923 1.397.303 2.491.669 3.282 1.099.8.42 1.391.927 1.772 1.523.391.596.586 1.318.586 2.168 0 1.426-.591 2.583-1.772 3.472-1.182.878-2.73 1.318-4.644 1.318-1.299 0-2.456-.234-3.472-.703-1.015-.469-1.806-1.113-2.373-1.934-.566-.82-.849-1.704-.849-2.651h3.457c.049.84.366 1.49.952 1.948.586.45 1.362.674 2.329.674.937 0 1.65-.176 2.139-.527.488-.362.732-.83.732-1.407zm13.521-1.45c0-.986.268-1.89.805-2.71.537-.83 1.597-1.811 3.179-2.944-.83-1.045-1.411-1.934-1.743-2.666-.323-.733-.484-1.44-.484-2.124 0-1.67.508-2.988 1.524-3.955 1.015-.977 2.383-1.465 4.101-1.465 1.553 0 2.823.459 3.809 1.377.996.908 1.494 2.036 1.494 3.384 0 .888-.225 1.709-.674 2.46-.449.743-1.186 1.485-2.212 2.227l-1.45 1.055 4.116 4.863c.596-1.172.894-2.476.894-3.911h3.091c0 2.627-.615 4.78-1.846 6.46L304.05 23h-4.131l-1.201-1.42c-1.524 1.142-3.34 1.713-5.449 1.713-2.11 0-3.799-.557-5.069-1.67-1.26-1.123-1.889-2.583-1.889-4.38zm7.06 3.208c1.201 0 2.324-.4 3.369-1.201l-4.658-5.493-.454.322c-1.172.889-1.758 1.904-1.758 3.047 0 .986.318 1.787.952 2.402.635.616 1.485.923 2.549.923zm-1.963-13.74c0 .82.503 1.85 1.509 3.09l1.626-1.113.454-.366c.606-.537.908-1.225.908-2.065 0-.557-.21-1.03-.63-1.421-.42-.4-.952-.6-1.596-.6-.694 0-1.245.234-1.656.702-.41.47-.615 1.06-.615 1.773zM314.787 23V9.787h-2.417V7.15h2.417V5.7c0-1.758.488-3.115 1.465-4.072.977-.957 2.344-1.436 4.102-1.436.625 0 1.289.088 1.992.264l-.088 2.783a7.014 7.014 0 00-1.362-.117c-1.7 0-2.549.874-2.549 2.622V7.15h3.222v2.637h-3.222V23h-3.56zm18.853 0c-.157-.303-.293-.796-.411-1.48-1.132 1.182-2.519 1.773-4.16 1.773-1.591 0-2.89-.454-3.896-1.362-1.006-.909-1.509-2.032-1.509-3.37 0-1.689.625-2.983 1.875-3.881 1.26-.909 3.057-1.363 5.391-1.363h2.182v-1.04c0-.82-.229-1.474-.688-1.962-.459-.499-1.157-.748-2.095-.748-.81 0-1.475.205-1.992.616-.518.4-.776.913-.776 1.538h-3.56c0-.87.288-1.68.864-2.432.576-.762 1.358-1.357 2.344-1.787.996-.43 2.104-.645 3.325-.645 1.856 0 3.335.47 4.439 1.407 1.103.927 1.67 2.236 1.699 3.926v7.148c0 1.426.2 2.563.6 3.413V23h-3.632zm-3.911-2.564c.703 0 1.362-.17 1.977-.512.625-.342 1.094-.801 1.406-1.377v-2.988h-1.919c-1.318 0-2.309.23-2.973.688-.664.46-.996 1.108-.996 1.948 0 .684.224 1.23.673 1.64.459.401 1.07.601 1.832.601zM343.703 7.15l.103 1.831c1.172-1.416 2.71-2.124 4.614-2.124 3.301 0 4.98 1.89 5.039 5.67V23h-3.56V12.731c0-1.005-.219-1.748-.659-2.226-.429-.488-1.137-.733-2.124-.733-1.435 0-2.505.65-3.208 1.949V23h-3.559V7.15h3.354zm22.28 11.543c0-.634-.263-1.118-.791-1.45-.517-.332-1.381-.625-2.592-.879s-2.222-.576-3.033-.966c-1.777-.86-2.666-2.105-2.666-3.736 0-1.367.577-2.51 1.729-3.428 1.152-.918 2.617-1.377 4.394-1.377 1.895 0 3.423.47 4.585 1.407 1.172.937 1.758 2.153 1.758 3.647h-3.559c0-.684-.254-1.25-.762-1.7-.508-.458-1.182-.688-2.022-.688-.781 0-1.42.181-1.919.542a1.715 1.715 0 00-.732 1.45c0 .547.23.972.689 1.275.459.303 1.386.61 2.783.923 1.396.303 2.49.669 3.281 1.099.801.42 1.392.927 1.772 1.523.391.596.586 1.318.586 2.168 0 1.426-.59 2.583-1.772 3.472-1.182.878-2.73 1.318-4.644 1.318-1.298 0-2.456-.234-3.471-.703-1.016-.469-1.807-1.113-2.373-1.934-.567-.82-.85-1.704-.85-2.651h3.457c.049.84.366 1.49.952 1.948.586.45 1.363.674 2.329.674.938 0 1.651-.176 2.139-.527.488-.362.732-.83.732-1.407zM383.854 23h-3.559V.5h3.559V23zm3.223-8.071c0-1.553.308-2.95.923-4.19.615-1.25 1.479-2.207 2.593-2.87 1.113-.675 2.392-1.012 3.838-1.012 2.138 0 3.872.689 5.2 2.066 1.338 1.377 2.06 3.203 2.168 5.478l.014.835c0 1.563-.302 2.96-.908 4.19-.595 1.23-1.455 2.182-2.578 2.856-1.113.674-2.402 1.011-3.867 1.011-2.236 0-4.028-.742-5.376-2.227-1.338-1.494-2.007-3.481-2.007-5.961v-.176zm3.56.307c0 1.631.337 2.91 1.01 3.838.674.918 1.612 1.377 2.813 1.377s2.134-.469 2.798-1.406c.674-.938 1.011-2.31 1.011-4.116 0-1.602-.347-2.871-1.04-3.809-.684-.937-1.617-1.406-2.798-1.406-1.162 0-2.085.464-2.769 1.391-.683.918-1.025 2.295-1.025 4.131zm19.541 3.252l3.354-11.338h3.677L411.716 23h-3.091l-5.537-15.85h3.691l3.399 11.338zm16.04 4.805c-2.256 0-4.087-.708-5.493-2.124-1.397-1.426-2.095-3.32-2.095-5.684v-.44c0-1.581.303-2.992.908-4.232.615-1.25 1.475-2.222 2.578-2.916 1.104-.693 2.334-1.04 3.692-1.04 2.158 0 3.823.689 4.995 2.066 1.181 1.377 1.772 3.325 1.772 5.845v1.435h-10.356c.107 1.309.542 2.344 1.303 3.106.772.761 1.739 1.142 2.901 1.142 1.631 0 2.959-.659 3.984-1.977l1.919 1.83c-.635.948-1.484 1.685-2.549 2.213-1.054.517-2.241.776-3.559.776zm-.425-13.58c-.977 0-1.768.343-2.373 1.026-.596.684-.977 1.636-1.143 2.857h6.783v-.264c-.079-1.191-.396-2.09-.953-2.695-.556-.616-1.328-.923-2.314-.923zm26.631 11.734c-1.045 1.23-2.529 1.846-4.453 1.846-1.719 0-3.023-.503-3.911-1.509-.879-1.006-1.319-2.46-1.319-4.365V7.15h3.56v10.225c0 2.012.835 3.018 2.505 3.018 1.728 0 2.895-.62 3.501-1.86V7.15h3.559V23h-3.354l-.088-1.553zm15.952-2.754c0-.634-.264-1.118-.791-1.45-.518-.332-1.382-.625-2.593-.879s-2.221-.576-3.032-.966c-1.777-.86-2.666-2.105-2.666-3.736 0-1.367.576-2.51 1.728-3.428 1.153-.918 2.618-1.377 4.395-1.377 1.895 0 3.423.47 4.585 1.407 1.172.937 1.758 2.153 1.758 3.647h-3.56c0-.684-.254-1.25-.762-1.7-.507-.458-1.181-.688-2.021-.688-.781 0-1.421.181-1.919.542a1.715 1.715 0 00-.732 1.45c0 .547.229.972.688 1.275.459.303 1.387.61 2.783.923 1.397.303 2.491.669 3.282 1.099.8.42 1.391.927 1.772 1.523.391.596.586 1.318.586 2.168 0 1.426-.591 2.583-1.773 3.472-1.181.878-2.729 1.318-4.643 1.318-1.299 0-2.456-.234-3.472-.703-1.015-.469-1.806-1.113-2.373-1.934-.566-.82-.849-1.704-.849-2.651h3.457c.048.84.366 1.49.952 1.948.586.45 1.362.674 2.329.674.937 0 1.65-.176 2.139-.527.488-.362.732-.83.732-1.407z"
        fill="#5D2CFF"
      />
    </svg>
  );
}

export default SvgExplore;
