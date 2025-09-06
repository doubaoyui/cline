import { Empty, Int64Request } from "@shared/proto/cline/common"
import { Controller } from ".."

export async function checkpointDiff(controller: Controller, request: Int64Request): Promise<Empty> {
	if (request.value) {
		// presentMultifileDiff is optional on ICheckpointManager, so capture then optionally invoke
		const fn = controller.task?.checkpointManager?.presentMultifileDiff
		await fn?.(request.value, false)
	}
	return Empty.create()
}
